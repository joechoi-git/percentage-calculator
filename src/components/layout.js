import React from "react"
import { Container, Row, Col, Visible } from "react-grid-system";
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

export default function Layout({ children }) {
  const shareUrl = 'https://percentcalculatorpro.com/';
  const title = 'Percent Calculator Pro';
  return (
    <Container className={styles.layout}>
      <header style={{ marginBottom: `1.5rem` }}>
        <p className={styles.logo}>PercentCalculatorPro.com</p>
      </header>
      {children}
      <footer style={{ marginTop: `1.5rem` }}>
        <Row>
          <Col sm={4}>
            <p>&copy; 2020 Joe Choi</p>
          </Col>
          <Col sm={8} className={styles.socialshare}>
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
      </footer>
    </Container>
  )
}