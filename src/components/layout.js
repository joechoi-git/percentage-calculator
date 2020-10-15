import React from "react"
import { Container, Row, Col, useScreenClass } from "react-grid-system"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"; // https://github.com/nygardk/react-share/blob/master/demo/Demo.tsx
import styles from "./layout.module.css"
import logo from "../images/logo.png"

export default function Layout({ children }) {
  const shareUrl = 'https://percentcalculatorpro.com/';
  const title = 'Percent Calculator Pro';
  const screenClass = useScreenClass();
  return (
    <Container className={styles.layout}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Row>
          <Col sm={6}>
            <h1 
              className={styles.logo}
              style={{ fontSize: ['md', 'lg', 'xl', 'xxl'].includes(screenClass) ? '1.5rem' : '1.25rem' }}
            >
              <img src={logo} alt="Percent Calculator Pro is a free online tool to calculate percentages."/>
              PercentCalculatorPro.com
            </h1>
          </Col>
          <Col sm={6} 
            className={styles.socialshare}
            style={{ textAlign: ['md', 'lg', 'xl', 'xxl'].includes(screenClass) ? 'right' : 'left' }}
          >
            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="Check out PercentCalculatorPro.com"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <FacebookShareButton
              url={shareUrl}
              quote={title}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={title}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton 
              url={shareUrl}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </Col>
        </Row>
      </header>
      {children}
      <footer style={{ marginTop: `1.5rem` }}>
        <p>&copy; 2020 Pro Calculator Series</p>
      </footer>
    </Container>
  )
}