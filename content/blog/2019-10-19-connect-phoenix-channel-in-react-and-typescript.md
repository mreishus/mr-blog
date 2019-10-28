---
title: "Connect to Phoenix channels using React and Typescript"
date: 2019-10-19T19:50:51-05:00
templateKey: blog-post
---

## Problem Description

You have an application using an Elixir and Phoenix backend, and a
TypeScript and React frontend. You'd like to use two-way communication
between the frontend and backend over Phoenix's channels using websockets.

## Answer

[Github alexgriff/use-phoenix-channel](https://github.com/alexgriff/use-phoenix-channel) provides
a good starting point, but it doesn't quite work in typescript. I've taken this and made a few modifications
to it:

1. Ported to TypeScript.
2. It no longer forces you to use a reducer to manage state. You provide a callback when
   messages are received, state management is up to the caller.

Code listing (`useChannel.ts`):

```typescript
import { useContext, useEffect, useState } from "react";
import { Socket } from "phoenix";
import SocketContext from "../contexts/SocketContext";

/* useChannel is used to provide access to phoenix channels.

example usage showing communication in both directions:

interface Props {}
export const TestComponent: React.FC<Props> = () => {
  const onChannelMessage = useCallback((event, payload) => {
    console.log("Got channel message from phoenix", event, payload);
  }, []);
  const broadcast = useChannel("lobby:lobby", onChannelMessage);
  return (
    <button
      onClick={() => broadcast("test_message_from_javascript", { stuff: 1 })}
    >
      Send message to phoenix
    </button>
  );
};

this is adapated from alexgriff/use-phoenix-channel with the following changes:
1. Ported to typescript
2. Does not force you to use a reducer.

Note: It does require access to a phoenix socket object, built like so:

import { Socket } from 'phoenix';
const socket = new Socket(webSocketUrl, {params: options});
socket.connect();

It looks for this in SocketContext.  See
https://medium.com/flatiron-labs/improving-ux-with-phoenix-channels-react-hooks-8e661d3a771e
for an example implementation.

*/

const useChannel = (
  channelTopic: string,
  onMessage: (event: any, payload: any) => void
) => {
  const socket = useContext(SocketContext);
  const [broadcast, setBroadcast] = useState<
    (eventName: string, payload: object) => void
  >(mustJoinChannelWarning);

  useEffect(() => {
    let doCleanup: () => void = () => null;
    if (socket != null) {
      doCleanup = joinChannel(socket, channelTopic, onMessage, setBroadcast);
    }
    return doCleanup;
  }, [channelTopic, onMessage, socket]);

  return broadcast;
};

const joinChannel = (
  socket: Socket,
  channelTopic: string,
  onMessage: (event: any, payload: any) => void,
  setBroadcast: React.Dispatch<
    React.SetStateAction<(eventName: string, payload: object) => void>
  >
) => {
  const channel = socket.channel(channelTopic, { client: "browser" });

  channel.onMessage = (event, payload) => {
    // I don't think the chan_reply_ events are needed - always duplicates.
    if (event != null && !event.startsWith("chan_reply_")) {
      onMessage(event, payload);
    }
    // Return the payload since we're using the
    // special onMessage hook
    return payload;
  };

  channel
    .join()
    .receive("ok", ({ messages }) =>
      console.log("successfully joined channel", messages || "")
    )
    .receive("error", ({ reason }) =>
      console.error("failed to join channel", reason)
    );

  setBroadcast((_oldstate: any) => (eventName: string, payload: object) =>
    channel.push(eventName, payload)
  );

  return () => {
    channel.leave();
  };
};

const mustJoinChannelWarning = (_oldstate: any) => (
  _eventName: string,
  _payload: object
) =>
  console.error(
    `useChannel broadcast function cannot be invoked before the channel has been joined`
  );

export default useChannel;
```

I've seen this component kick off a warning in the console in some circumstances.
I'll be keeping an eye out for it and will update the post later when I fix it.

Update 10/28/2019:  Updated the component to leave channels when unmounting
properly.
