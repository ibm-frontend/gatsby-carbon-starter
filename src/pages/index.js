import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button } from 'carbon-components-react'

const IndexPage = () => (
  <Layout>
    <SEO
      description="Gatsby Carbon Starter"
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `carbon`]}
    />
    <Button style={{ margin: '1rem' }}>Hi from Carbon</Button>
    <p>
      Welcome to Gatsby with Carbon. <br />
      Now go build something great!
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
