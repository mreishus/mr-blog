---
title: "Word Vector Series: Part 4 - Tying it all together"
date: 2017-07-21T17:08:10-05:00
---

# Intro to Part 4

In part 4, we'll be using the service we made in part 3 in our web app.

<!--more-->

Previous: [Part 3]({{< relref "2017-07-21-word-vector-pt-3.md" >}})

# Adding the service to search

There isn't much to do here but look up similar words on the user's search.  Our simple psuedo code is something like:

* Take the user's search and split it up into words
* For each word, look up similar words
* Add the similar words to the user's search

The focus on this series is on using the model, not building react apps - so I won't explain in detail how I added it
it to the app, but it's pretty straightforward.

Here is the code - note that the api address is hardcoded.  The app code is on the rough side since it's just an
example made for this blog series. 

[Github repo with both front-end and service](https://github.com/mreishus/vector-search-example).

[Relevant file doing the work of calling the service](https://github.com/mreishus/vector-search-example/blob/master/front-end/src/components/SearchPage.js#L59)

# Screenshots

Unfortunately, I can't host a demo of the app here since this is hosted by github pages.  However, I've taken a few
screenshots of the related search in action:


<img data-src="/img/search-1.png" width="100%" class="lazyload">

<img data-src="/img/search-2.png" width="100%" class="lazyload">

<img data-src="/img/search-3.png" width="100%" class="lazyload">

# Conclusion


The app and search functionality is rough, but it shows off the general concept.  You might have noticed some shortcomings:
The API should cache.  The model contains some features that we're not accounting for, like `_` and `#`.  We should weigh
our search terms with the similarity score - terms that are less related to our original terms shouldn't be as important
in the search.  The search should use word boundaries, not substrings.  We need tests.  Etc... but this isn't a full
fledged project, just a tech demo. 

This ends the series, hope you found it interesting.

Previous: [Part 3]({{< relref "2017-07-21-word-vector-pt-3.md" >}})
