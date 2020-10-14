import React from "react"
import { Button, TextField } from '@material-ui/core';
import { Container, Row, Col, Visible } from "react-grid-system";
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"

export default function Home() {
  const [now, setNow] = React.useState("");
  const [future, setFuture] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('now', now, 'future', future);
    setResult("");
    if (now!=="" && future!=="") {
      let output = ((future / now) - 1) * 100;
      setResult(`${output}%`);
    }
  }

  const handleFocus = (e) => {
    try {
      e.target.select();
      navigator.clipboard.writeText(result);
    } catch (error) {
    }
  }

  return (
    <Layout>
      <SEO title="Percent Calculator Pro" description="Percent Calculator Pro is a free online tool to calculate percentages." />
      <h1 className={styles.h1}>Percent Calculator Pro is a free online tool to calculate percentages.</h1>
      <h2 className={styles.h2}>Percentage Difference</h2>
      <form onSubmit={handleSubmit}>
        <Row style={{margin: `1rem`, padding: `2rem`, backgroundColor: `#fffcfd`,  border: `1px solid black`, borderRadius: `0.5rem`}}>
          <Col sm={3} style={{marginBottom: `1rem`}}>
            <TextField
              label="Now (any number)"
              variant="outlined"
              className={styles.input}
              value={now}
              onChange={(e) => setNow(parseFloat(e.target.value.trim()))}
            />
          </Col>
          <Col sm={3} style={{marginBottom: `1rem`}}>
            <TextField
              label="Future (any number)"
              variant="outlined"
              className={styles.input}
              value={future}
              onChange={(e) => setFuture(parseFloat(e.target.value.trim()))}
            />
          </Col> 
          <Col sm={3} style={{marginBottom: `1rem`}}>
            <Button 
              type="submit"
              variant="contained" 
              color="secondary" 
              className={styles.button}
              onClick={(e) => { handleSubmit(e) }}
            >
              Calculate
            </Button>
          </Col>
          <Col sm={3} style={{marginBottom: `1rem`}}>
            <TextField
              label="Result"
              variant="outlined"
              className={styles.result}
              value={result}
              onFocus={(e) => handleFocus(e)}
            />
          </Col>
        </Row>
      </form>

    </Layout>
  )
}