import React from "react"
import Layout from "../components/layout"

class Projects extends React.Component {
  render() {
    // const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    //const siteTitle = "Projects"
    const siteTitle = null
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Personal Projects</h1>
        <p>These are small projects I've made by myself.</p>
        <h2>
          <a href="https://sbin.top/">Sbin</a>
        </h2>
        <p>
          <a href="https://sbin.top/">Sbin</a> is an encrypted online paste bin,
          allowing users to share snippets of text by passing around a URL.
          Syntax highlighting is provided, but the language must be chosen when
          creating a paste. All pastes have an expire date when they are
          automatically purged.
        </p>
        <p>
          The server has no knowledge of the stored data. A decryption key is
          generated, given to the user once, and forgotten. It's stored in the
          URL for easy decrypting (but in the fragment identifier, ensuring it's
          not sent back to the server upon retrieval). More information
          available in the <a href="https://sbin.top/f/about">about page</a>.
        </p>
        <p>
          <a href="https://github.com/mreishus/sbin">Github source.</a> Sbin is
          built using Elixir, Phoenix, React, and Postgres.
        </p>
        <h2>
          <a href="https://demonspirit.xyz/">Demon Spirit</a>
        </h2>
        <p>
          <a href="https://demonspirit.xyz/">Demon Spirit</a> is an online board
          game. It's an abstract game played on a 5x5 grid, based on the
          commerical game Onitama. Users may create rooms and play against
          another users or against a computer AI with adjustable difficulty. No
          registration is required.
        </p>
        <p>
          <a href="https://github.com/mreishus/demon_spirit_umbrella">
            Github Source.
          </a>{" "}
          Demon Spirit is built using Elixir, Phoenix, and Phoenix Live View.
          Realtime updates are pushed through phoenix channels using websockets.
        </p>
        <h2>
          <a href="https://starspades.com/">StarSpades</a>
        </h2>
        <p>
          <a href="https://starspades.com/">StarSpades</a> is an online card
          game. It's an implementation of the classic game spades. Users may
          create rooms and play against each other or AI bots. Registration is
          required.
        </p>
        <p>
          <a href="https://github.com/mreishus/spades">Github Source.</a> Demon
          Spirit is built using Elixir, Phoenix, and React. Realtime updates are
          pushed through phoenix channels using websockets.
        </p>
        <h2>
          <a href="https://snes.matthewreishus.com/">SNES Classifier</a>
        </h2>
        <p>
          This is a model built using a neural network. I've trained it to
          classify screenshots of SNES games. Upload a screenshot of any SNES
          game; the model will tell you which game the screenshot came from.
        </p>
        <p>
          <a href="https://github.com/mreishus/snes_classifier">
            Github Source.
          </a>{" "}
          See writeup{" "}
          <a href="https://matthewreishus.com/2019-06-03-snes-classifier/">
            here.
          </a>
        </p>
        <h2>
          <a href="https://github.com/mreishus/aoc/">
            My Advent of Code Solutions
          </a>
        </h2>
        <p>
          I've participated in the Programming event,{" "}
          <a href="https://adventofcode.com">Advent of Code</a> and solved all
          problems in all years, 2015-2019. I did not make the Advent of Code
          site, I'm just a participant.
        </p>
        <p>
          <a href="https://github.com/mreishus/aoc/">
            Solutions on Github with writeups for most problems.
          </a>
        </p>
        <h2>
          <a href="https://github.com/mreishus/slowcat">slowcat</a>
        </h2>
        <p>
          <pre style={{ display: "inline" }}>slowcat</pre> is like{" "}
          <pre style={{ display: "inline" }}>cat</pre>, but it's slow. It prints
          text to the console with a small delay between each character,
          producing a visual effect reminiscent of text sent over old modems or
          teletypes.
        </p>
        <p>It's a half-joke project made just to get familiar with golang.</p>
        <h1>Professional Projects</h1>
        <p>
          Projects I've contributed to, in a team context, at full-time jobs.
        </p>
        <h2>Experian</h2>
        <p>
          2016-2019
          <br />
          <a href="https://omniactivation.experian.com/">Audience Engine</a>
          <br />
          Data Engine
        </p>
        <p>
          I made many contributions to Audience Engine, but notable is a object
          diagramming library created in React. Items can be placed on an
          scrollable, zoomable infinite canvas and connected with curved, SVG
          arrows. Feature automatic arrangement, a mini-map, and stellar
          rendering performance.
        </p>
        <h2>Allied Health Media</h2>
        <p>
          2011-2015 <br />
          <a href="https://www.speechpathology.com/">SpeechPathology</a>
          <br />
          <a href="https://www.audiologyonline.com/">Audiology Online</a>
          <br />
          <a href="https://www.physicaltherapy.com/">Physical Therapy</a>
          <br />
          <a href="https://www.occupationaltherapy.com/">
            Occupational Therapy
          </a>
        </p>
        <h2>HRsmart</h2>
        <p>
          2007-2011
          <br />
          300+ TMS Job Boards (now defunct)
        </p>
      </Layout>
    )
  }
}
export default Projects
