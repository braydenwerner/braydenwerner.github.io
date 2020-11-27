import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './SideBar.scss'

export default function SideBar({ children, location }) {
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 500)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            {isMounted && (
                <div className={location}>
                    {children}
                </div>
            )}
        </>
    )
}

SideBar.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.string
}
