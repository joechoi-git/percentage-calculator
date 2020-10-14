import React from "react"
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Container, Row, Col, Visible } from "react-grid-system";
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"

const ResultTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      fontWeight: 'bolder',
    },
  },
})(TextField);

export default function Home() {
  const [now, setNow] = React.useState("");
  const [future, setFuture] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult("");
    document.getElementById("result").style.color="black";
    try {
      if (now!=="" && future!=="") {
        setNow(parseFloat(now));
        setFuture(parseFloat(future));
        let output = ((future / now) - 1) * 100;
        setResult(`${output.toFixed(2)}%`);
        if (output >= 0) {
          document.getElementById("result").style.color="green";
        } else {
          document.getElementById("result").style.color="red";
        }
      }
    } catch (error) {  
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
        <Row className={styles.row}>
          <Col sm={3} className={styles.col}>
            <TextField
              label="Now (any number)"
              variant="outlined"
              className={styles.textfield}
              value={now}
              onChange={(e) => setNow(e.target.value.trim())}
            />
          </Col>
          <Col sm={3} className={styles.col}>
            <TextField
              label="Future (any number)"
              variant="outlined"
              className={styles.textfield}
              value={future}
              onChange={(e) => setFuture(e.target.value.trim())}
            />
          </Col> 
          <Col sm={3} className={styles.col}>
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
          <Col sm={3} className={styles.col}>
            <ResultTextField
              id="result"
              label="Result"
              variant="outlined"
              className={styles.textfield}
              value={result}
              onFocus={(e) => handleFocus(e)}
            />
          </Col>
        </Row>
      </form>

    </Layout>
  )
}