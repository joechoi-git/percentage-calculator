import React from "react"
import { Container, Row, Col, useScreenClass } from "react-grid-system"
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby"
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
// import Helmet from "react-helmet"
import styles from "./layout.module.css"
import logo from "../images/logo.png"

export default function Layout({ location, children }) {
    const shareUrl = "https://percentcalculatorpro.com";
    const title = "PercentCalculatorPro.com is a free online tool to calculate percentages. Use this tool to calculate tips, taxes, success rates, stock options, and discounts.";
    const screenClass = useScreenClass();
    return (
        <Container className={styles.layout}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Navbar expand="lg" style={{padding:`0`}}>
                    <Link 
                        to="/"
                        className={styles.logo}
                        style={{ fontSize: ['md', 'lg', 'xl', 'xxl'].includes(screenClass) ? '1.5rem' : '1.25rem' }}
                    >
                        <img 
                            src={logo} 
                            alt="Percent Calculator Pro is a free online tool to calculate percentages."
                            style={{ height: ['md', 'lg', 'xl', 'xxl'].includes(screenClass) ? '2rem' : '1.5rem' }}
                        />
                        Percent Calculator Pro
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className={`${styles.navlink} ${location==="/" ? styles.active : ``}`}>Home</Link>
                            <Link to="/success-rate-calculator" className={`${styles.navlink} ${location==="/success-rate-calculator" ? styles.active : ``}`}>Success Rate</Link>
                            <Link to="/price-discount-calculator" className={`${styles.navlink} ${location==="/price-discount-calculator" ? styles.active : ``}`}>Price Discount</Link>
                            <Link to="/sales-tax-calculator" className={`${styles.navlink} ${location==="/sales-tax-calculator" ? styles.active : ``}`}>Sales Tax</Link>
                            <Link to="/tip-calculator" className={`${styles.navlink} ${location==="/tip-calculator" ? styles.active : ``}`}>Tip Calculator</Link>
                            <Link to="/stock-options-calculator" className={`${styles.navlink} ${location==="/stock-options-calculator" ? styles.active : ``}`}>Stock Options</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            {children}
            <footer style={{ marginTop: `1.5rem` }}>
                <Row>
                    <Col sm={6}>
                        <p>&copy; 2020 Pro Calculator</p>
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
            </footer>
        </Container>
    )
}