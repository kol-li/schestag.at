import React from 'react'
import Helmet from 'react-helmet'
import Masonry from 'react-masonry-component'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

import '../assets/scss/showcase.sass'
import '../assets/scss/card.sass'

const index = ({ data }) => (
    <Layout>
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>

        <div id="main">

            <section id="one">
                <header className="major">
                    <h2>Recent Work</h2>
                </header>

                <Masonry className="showcase">
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                      <div key={node.id} className="showcase__item">
                          <figure className="card">
                              <Link to={`/${node.frontmatter.slug}/`} className="card__image">
                                  <GatsbyImage image={node.frontmatter.coverImage.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} />
                              </Link>
                              <figcaption className="card__caption">
                                  <h6 className="card__title">
                                      <Link to={`/${node.frontmatter.slug}/`}>{node.frontmatter.title}</Link>
                                  </h6>
                                  <div className="card__description">
                                      <p>{node.frontmatter.excerpt}</p>
                                  </div>
                              </figcaption>
                          </figure>
                      </div>
                    ))}
                </Masonry>
            </section>

            <section id="two">
                <h2>About Me</h2>
                <p>I’m a passionate software developer with a broad experience in web software development – both employed and selfemployed, both on site and remote. What I love about my work is the huge variety – every project is another adventure and no solution is like the one before.</p>
                <h3>What I offer</h3>
                <ul>
                    <li>Web development using state-of-the-art technology like
                        <ul>
                            <li>Angular</li>
                            <li>GatsbyJS</li>
                            <li>nodeJS</li>
                            <li>...</li>
                        </ul>
                    </li>
                    <li>Mobile app development for Android and iOS</li>
                    <li>WordPress
                        <ul>
                            <li>Customization</li>
                            <li>Feature implementation</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section id="three">
                <h2>Get In Touch</h2>
                <p>Just let me know what you desire, I'm sure we will find a solution!</p>
                <ul className="labeled-icons">
                    <li>
                        <h3 className="icon">
                            <i className="fas fa-envelope"/>
                            <span className="label">Email</span>
                        </h3>
                        <a href="javascript:unCryptHref('nbjmup;dpoubduAtdiftubh/bu');">Contact me!</a>
                    </li>
                </ul>
            </section>

            <section id="four">
                <a href="imprint/">Imprint</a>
            </section>

        </div>

    </Layout>
)

export default index;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___order]
        order: ASC
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            excerpt
            coverImage {
              childImageSharp { 
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`