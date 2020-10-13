import React from "react"
import { Button, TextField } from '@material-ui/core';
import { Container, Row, Col, Visible } from "react-grid-system";
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"

export default function Home() {
  return (
    <Layout>
      <SEO title="Percent Calculator Pro" description="Percent Calculator Pro is a free online tool to calculate percentages." />
      <h1 className={styles.h1}>Percent Calculator Pro is a free online tool to calculate percentages.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor nisi felis, sed accumsan ante dignissim et. Suspendisse malesuada eros non mi eleifend condimentum. Maecenas in sapien efficitur, iaculis quam ut, pellentesque tortor. Pellentesque lorem arcu, tempus quis ex quis, malesuada pellentesque ipsum. Aliquam condimentum ligula arcu, vestibulum porta enim malesuada ac. Vivamus fringilla, purus a sagittis auctor, lectus metus sagittis tortor, fermentum iaculis turpis magna at enim. Donec et fringilla diam, sit amet vestibulum ex.
      </p>
      <Row>
        <Col>
          <TextField
              label="Size"
              id="outlined-size-normal"
              defaultValue="Normal"
              variant="outlined"
              style={{backgroundColor:`#fff`}}
          />
        </Col>
        <Col>
          <TextField
              label="Size"
              id="outlined-size-normal"
              defaultValue="Normal"
              variant="outlined"
              style={{backgroundColor:`#fff`}}
          />
        </Col> 
        <Col>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Col>
      </Row>

    </Layout>
  )
}