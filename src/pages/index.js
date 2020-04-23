import React from "react"

import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default () => {
    return (
        <Layout>
            <h2>Hi there!</h2>
            <p>I'm Daniel, a Dallas-based software engineer</p>
            <Link to="/contact">Contact Me</Link>
        </Layout>
    )
}
