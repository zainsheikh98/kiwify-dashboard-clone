import React from 'react'
import LOGO from 'assets/images/kiwify-logo.png'

interface LogoProps {
    width: string
    height: string
}

const Logo = ({ width, height }: LogoProps) => {
    return (
        <div
            style={{
                margin: 0,
                padding: 0,
                width,
                height,
            }}
        >
            <img src={LOGO} alt="kiwify-logo" />
        </div>
    )
}

export default Logo
