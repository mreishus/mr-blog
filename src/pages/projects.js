import React from "react"
import Layout from "../components/layout"

class Projects extends React.Component {
  render() {
    // const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const siteTitle = "Projects"
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h2>
          <a href="https://sbin.top/f/">Sbin</a>
        </h2>
        <p>
          <a href="https://sbin.top/f/">Sbin</a> is an encrypted online paste
          bin, allowing users to share snippets of text by passing around a URL.
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
      </Layout>
    )
  }
}
export default Projects
