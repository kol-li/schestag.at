import React from 'react'
import '../assets/css/main.css'

import Header from './Header'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Header />
                {children}
            </div>
        )
    }
}

export default Template
