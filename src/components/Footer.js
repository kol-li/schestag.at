import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="location">
                        Current location: <a href="https://goo.gl/maps/mzB59Fg337YuequBA" target="_blank" rel="noopener noreferrer">Vienna, Austria</a>
                    </ul>
                    <ul className="icons">
                        <li>
                            <a href="https://stackoverflow.com/users/3432305/kolli" className="icon fa-stack-overflow" target="_blank" rel="noopener noreferrer">
                                <span className="label">Stack Overflow</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/michaelschestag/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer">
                                <span className="label">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/kol_li" className="icon fa-twitter" target="_blank" rel="noopener noreferrer">
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/kol.lee/" className="icon fa-instagram" target="_blank" rel="noopener noreferrer">
                                <span className="label">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href='mailto&#58;con%74a&#99;t&#64;&#115;c%6&#56;&#101;s%7&#52;a&#103;&#46;a%74' className="icon fa-envelope-o">
                                <span className="label">Email</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="copyright">
                        <li>
                            &copy; 2020 Michael Schestag
                        </li>
                        <li>
                            Design: <a href="http://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a>
                        </li>
                        <li>
                            <i className="icon fa-camera-retro"/> by <a href="https://www.instagram.com/j.weinzettl" target="_blank" rel="noopener noreferrer">Julia Weinzettl</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
