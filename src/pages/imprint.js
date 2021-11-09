import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const ImprintPage = ({ data }) => (
  <Layout>
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
      <h1>Kolli Software Services - Michael Schestag</h1>
      <ul className="labeled-icons">
        <li>
          <h3 className="icon">
            <i className="fas fa-home"/>
            <span className="label">Address</span>
          </h3>
          Fundergasse 14/1/401<br />
          1220 Wien<br />
          Österreich
        </li>
        <li>
          <h3 className="icon">
            <i className="fas fa-envelope"/>
            <span className="label">Email</span>
          </h3>
          <a href="javascript:unCryptHref('nbjmup;dpoubduAtdiftubh/bu');">contact (a) schestag.at</a>
        </li>
      </ul>
      <p>Unternehmensgegenstand: Entwicklung sowie Wartung und Erweiterung von Software und webbasierten Applikationen</p>
      <p>UID-Nr.: ATU69989916</p>
      <p>
        {data.allFile.edges.map(({ node }) => (
          <a key={node.id} className="ecg" href="https://www.wkoecg.at/Web/Ecg.aspx?FirmaID=0c6b9543-a400-445e-88df-4c6a347bf1d6&_ga=2.173802727.516936350.1582557125-2084495530.1572278246" target="_blank" rel="noopener noreferrer">
            <img src={node.publicURL} alt="ECG- und Mediengesetz-Link" />
          </a>
        ))}
      </p>
    </div>
  </Layout>
)

export default ImprintPage

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "images"}, name: {eq: "ecg"}}) {
      edges {
        node {
          id
          publicURL
        }
      }
    }
  }
`