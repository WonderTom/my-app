import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <div>
    <Layout>
      <h1>Learn to design and code react apps</h1>
      <p>Complete course about the best tools and design systems.</p>
      <p>Now go build something super great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </div>
)

export default IndexPage
