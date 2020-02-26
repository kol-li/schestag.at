import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <h1>Hi, my name is <br />
                    <strong>Michael Schestag</strong> <br />
                    and I'm a <br />
                    <strong>Full Stack Software Engineer</strong></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
