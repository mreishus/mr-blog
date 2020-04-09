import React from "react"
import Layout from "../components/layout"

class Resources extends React.Component {
  render() {
    // const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    //const siteTitle = "Resources"
    const siteTitle = null
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Resources</h1>
        Some of my favorite software development resources. These are meant to
        be the best of the best and widely applicable. For books and libraries
        relating to specific technologies, check{" "}
        <a href="https://github.com/mreishus/notebook-pub">
          my public notebook
        </a>
        .
        <h2 style={{ marginTop: "20px" }}>
          Books <small>(No affiliate links)</small>
        </h2>
        <div style={{ marginTop: "20px" }}></div>
        <h3>General</h3>
        <ul>
          <li>
            <a href="https://www.amazon.com/Code-Complete-Practical-Handbook-Construction-dp-0735619670/dp/0735619670/">
              Code Complete
            </a>
          </li>
        </ul>
        <h3>Planning and Communication</h3>
        <ul>
          <li>
            <a href="https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959">
              The Mythical Man-Month
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Peopleware-Productive-Projects-Teams-3rd-dp-0321934113/dp/0321934113/">
              Peopleware
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Software-Estimation-Demystifying-Developer-Practices/dp/0735605351">
              Software Estimation: Demystifying the Black Art
            </a>
          </li>
        </ul>
        <h3>Workflow and Process</h3>
        <ul>
          <li>
            <a href="https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339">
              Accelerate
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002/">
              The DevOps Handbook
            </a>
          </li>
          <li>
            <a href="https://puppet.com/resources/report/state-of-devops-report/">
              State Of DevOps Report
            </a>{" "}
            (Annual)
          </li>
        </ul>
        <h3>Refactoring</h3>
        <ul>
          <li>
            <a href="https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature-dp-0134757599/dp/0134757599/">
              Refactoring
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers-dp-0131177052/dp/0131177052/">
              Working Effectively With Legacy Code
            </a>
          </li>
        </ul>
        <h3>Software Design</h3>
        <ul>
          <li>
            <a href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/">
              Designing Data-Intensive Applications
            </a>
          </li>
        </ul>
        <h3>Academic / Algorithms</h3>
        <ul>
          <li>
            <a href="https://www.amazon.com/gp/product/032157351X/">
              Algorithms (Sedgewick)
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844/">
              Introduction to Algorithms (CLRS)
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262510871">
              Structure and Interpretation of Computer Programs
            </a>{" "}
            <em>
              <small>
                <a href="https://sarabander.github.io/sicp/">
                  (Unofficial web version)
                </a>{" "}
                <a href="https://www.youtube.com/watch?v=2Op3QLzMgSY&list=PLE18841CABEA24090">
                  (Lecture videos)
                </a>
              </small>
            </em>
          </li>
        </ul>
        <h3>Fun / Historical</h3>
        <ul>
          <li>
            <a href="https://www.amazon.com/Masters-Doom-Created-Transformed-Culture/dp/0812972155">
              Masters of Doom
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Coders-Work-Reflections-Craft-Programming/dp/1430219483">
              Coders at Work
            </a>
          </li>
        </ul>
        <h2 style={{ marginTop: "20px" }}>Online Coding Challenges</h2>
        <ul>
          <li>
            <a href="https://adventofcode.com/">Advent Of Code</a> - Annual
            event spanning the month of December, with a new problem every day.
          </li>
          <li>
            <a href="https://exercism.io/">Exercism</a>
          </li>
          <li>
            <a href="https://www.codewars.com/">CodeWars</a>
          </li>
          <li>
            <a href="https://leetcode.com/">Leetcode</a>
          </li>
        </ul>
        <h2 style={{ marginTop: "20px" }}>Intro to Deep Learning</h2>
        <ul>
          <li>
            <a href="https://www.fast.ai/">fast.ai</a> has several free,
            high-quality online courses.
          </li>
        </ul>
        <h2>Conference Talks</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=M6JGdF9XC7g">
              Gene Kim - The Unicorn Project And The Five Ideals
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=JvBT4XBdoUE">
              Saša Jurić - The Soul of Erlang and Elixir
            </a>
          </li>
        </ul>
      </Layout>
    )
  }
}
export default Resources
