import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>I love writing software and teaching other how to do so as well</p>
            <p>I'm originally from Dallas, TX</p>
            <Link to="/contact">Contact Me!</Link>
        </Layout>
    )
}