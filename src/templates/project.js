import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const project = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <Helmet>
            <title>Project: {post.frontmatter.title}</title>
            <meta name="description" content={post.frontmatter.excerpt}/>
        </Helmet>
        <div id="main">
            <ul className="labeled-icons">
                <li>
            <h3 className="icon">
              <i className="fas fa-arrow-alt-circle-left"/>
              <span className="label">Back to main page</span>
            </h3>
            <a href='/'>Back</a>
          </li>
        </ul>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default project;

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        excerpt
      }
    }
  }
`