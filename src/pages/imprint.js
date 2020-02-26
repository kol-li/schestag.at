import React from 'react'
import Layout from '../components/layout'

const ImprintPage = () => (
  <Layout>
    <div id="main">
      <ul className="labeled-icons">
        <li>
          <h3 className="icon fa-arrow-circle-o-left"><span className="label">Back to main page</span></h3>
          <a href='/'>Back</a>
        </li>
      </ul>
      <h1>Kolli Software Services - Michael Schestag</h1>
      <ul className="labeled-icons">
        <li>
          <h3 className="icon fa-home"><span className="label">Address</span></h3>
          Doningasse 20/5/11<br />
          1220 Wien<br />
          Österreich
        </li>
        <li>
          <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
          <a href='mailto&#58;con%74a&#99;t&#64;&#115;c%6&#56;&#101;s%7&#52;a&#103;&#46;a%74'>contact (a) schestag.at</a>
        </li>
      </ul>
      <p>Unternehmensgegenstand: Entwicklung sowie Wartung und Erweiterung von Software und webbasierten Applikationen</p>
      <p>UID-Nr.: ATU69989916</p>
      <p><a href="https://is.gd/7liPl8" target="_blank" rel="noopener noreferrer">Mitglied der WKÖ & WKW</a></p>
    </div>
  </Layout>
)

export default ImprintPage
