import React from "react"
import { Container, Row, Col, Visible } from "react-grid-system";
import styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <Container className={styles.layout}>
      <header style={{ marginBottom: `1.5rem` }}>
        <p className={styles.p}>PercentCalculatorPro.com</p>
        {/*}
        <Visible xs sm>
          <p> This is rendered only on mobile </p>
        </Visible>
        <Visible md lg xl xxl>
          <p> This is rendered only on desktop </p>
        </Visible>
        <Row>
          <Col sm={4}>
            One of three columns
          </Col>
          <Col sm={4}>
            One of three columns
          </Col>
          <Col sm={4}>
            One of three columns
          </Col>
        </Row>
      {*/}
      </header>
      {children}
      <footer style={{ marginTop: `1.5rem` }}>
        <p>All rights reserved.</p>
      </footer>
    </Container>
  )
}