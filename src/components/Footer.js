import React, { useState, useEffect } from 'react'

function Footer() {
    const [year, setYear] = useState(new Date().getFullYear())
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])
    return (
        <div id="footer">
            <div className="inner">
                <ul className="location">
                    <li>
                        Current location: <a href="https://goo.gl/maps/mzB59Fg337YuequBA" target="_blank" rel="noopener noreferrer">Vienna, Austria</a>
                    </li>
                </ul>
                <ul className="icons">
                    <li>
                        <a href="https://stackoverflow.com/users/3432305/kolli" className="icon" target="_blank" aria-label="Michael Schestag on Stack Overflow" rel="noopener noreferrer">
                            <i className="fab fa-stack-overflow" aria-hidden="true"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/michaelschestag/" className="icon" target="_blank" aria-label="Michael Schestag on LinkedIn" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in" aria-hidden="true"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/kol_li" className="icon" target="_blank" aria-label="Michael Schestag on Twitter" rel="noopener noreferrer">
                            <i className="fab fa-twitter" aria-hidden="true"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/kol.lee/" className="icon" target="_blank" aria-label="Michael Schestag on Instagram" rel="noopener noreferrer">
                            <i className="fab fa-instagram" aria-hidden="true"/>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:unCryptHref('nbjmup;dpoubduAtdiftubh/bu');" className="icon" aria-label="Contact Michael Schestag by Email">
                            <i className="fas fa-envelope" aria-hidden="true"/>
                        </a>
                    </li>
                </ul>
                <ul className="copyright">
                    <li>
                        &copy;&nbsp;{year}&nbsp;Michael Schestag
                    </li>
                    <li>
                        Design:&nbsp;<a href="https://html5up.net" target="_blank" rel="noopener noreferrer">HTML5&nbsp;UP</a>
                    </li>
                    <li>
                        <i className="fas fa-camera-retro"/>&nbsp;by&nbsp;<a href="https://www.instagram.com/j.weinzettl" target="_blank" rel="noopener noreferrer">Julia&nbsp;Weinzettl</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
