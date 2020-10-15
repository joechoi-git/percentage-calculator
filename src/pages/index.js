import React from "react"
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Row, Col } from "react-grid-system";
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
  const [form1Input1, setForm1Input1] = React.useState("");
  const [form1Input2, setForm1Input2] = React.useState("");
  const [form1Result, setForm1Result] = React.useState("");
  const [form2Input1, setForm2Input1] = React.useState("");
  const [form2Input2, setForm2Input2] = React.useState("");
  const [form2Result, setForm2Result] = React.useState("");

  const handleSubmitForm1 = (e) => {
    e.preventDefault();
    setForm1Result("");
    document.getElementById("form1-result").style.color="black";
    try {
      if (form1Input1!=="" && form1Input2!=="") {
        setForm1Input1(parseFloat(form1Input1));
        setForm1Input2(parseFloat(form1Input2));
        let output = ((form1Input2 / form1Input1) - 1) * 100;
        setForm1Result(`${output.toFixed(2)}%`);
        if (output >= 0) {
          document.getElementById("form1-result").style.color="green";
        } else {
          document.getElementById("form1-result").style.color="red";
        }
      }
    } catch (error) {  
    }
  }

  const handleFocusForm1 = (e) => {
    try {
      e.target.select();
      // navigator.clipboard.writeText(form1Result);
    } catch (error) {
    }
  }

  const handleSubmitForm2 = (e) => {
    e.preventDefault();
    setForm2Result("");
    document.getElementById("form2-result").style.color="black";
    try {
      if (form2Input1!=="" && form2Input2!=="") {
        setForm2Input1(parseFloat(form2Input1));
        setForm2Input2(parseFloat(form2Input2));
        let output = (form2Input1 / form2Input2) * 100;
        setForm2Result(`${output.toFixed(2)}%`);
        if (output >= 0) {
          document.getElementById("form2-result").style.color="green";
        } else {
          document.getElementById("form2-result").style.color="red";
        }
      }
    } catch (error) {  
    }
  }

  const handleFocusForm2 = (e) => {
    try {
      e.target.select();
      // navigator.clipboard.writeText(form2Result);
    } catch (error) {
    }
  }

  return (
    <Layout>
      <SEO 
        title="Percent Calculator Pro" 
        description="Percent Calculator Pro is a free online tool to calculate percentages." 
        image="https://percentcalculatorpro.com/share.jpg" 
        url="https://percentcalculatorpro.com" 
      />
      <h1 className={styles.h1}>Percent Calculator Pro is a free online tool to calculate percentages.</h1>

      <h2 className={styles.h2}>Percentage Difference</h2>
      <form onSubmit={handleSubmitForm1}>
        <Row className={styles.row}>
          <Col sm={12}>
            <p>E.g. If the price moves from $1.50 to $2.25, what is the % difference?</p>
          </Col>
          <Col sm={3} className={styles.col}>
            <TextField
              label="Now (any number)"
              variant="outlined"
              type="number"
              className={styles.textfield}
              value={form1Input1}
              onChange={(e) => setForm1Input1(e.target.value.trim())}
            />
          </Col>
          <Col sm={3} className={styles.col}>
            <TextField
              label="Future (any number)"
              variant="outlined"
              type="number"
              className={styles.textfield}
              value={form1Input2}
              onChange={(e) => setForm1Input2(e.target.value.trim())}
            />
          </Col> 
          <Col sm={3} className={styles.col}>
            <Button 
              type="submit"
              variant="contained" 
              color="secondary" 
              className={styles.button}
              onClick={(e) => { handleSubmitForm1(e) }}
            >
              Calculate
            </Button>
          </Col>
          <Col sm={3} className={styles.col}>
            <ResultTextField
              id="form1-result"
              label="Result (%)"
              variant="outlined"
              className={styles.textfield}
              value={form1Result}
              onFocus={(e) => handleFocusForm1(e)}
            />
          </Col>
        </Row>
      </form>

      <h2 className={styles.h2}>Percentage Calculation</h2>
      <form onSubmit={handleSubmitForm2}>
        <Row className={styles.row}>
          <Col sm={12}>
            <p>E.g. $160 out of $750 is what percent?</p>
          </Col>
          <Col sm={3} className={styles.col}>
            <TextField
              label="(any number)"
              variant="outlined"
              type="number"
              className={styles.textfield}
              value={form2Input1}
              onChange={(e) => setForm2Input1(e.target.value.trim())}
            />
          </Col>
          <Col sm={3} className={styles.col}>
            <TextField
              label="(any number)"
              variant="outlined"
              type="number"
              className={styles.textfield}
              value={form2Input2}
              onChange={(e) => setForm2Input2(e.target.value.trim())}
            />
          </Col> 
          <Col sm={3} className={styles.col}>
            <Button 
              type="submit"
              variant="contained" 
              color="secondary" 
              className={styles.button}
              onClick={(e) => { handleSubmitForm2(e) }}
            >
              Calculate
            </Button>
          </Col>
          <Col sm={3} className={styles.col}>
            <ResultTextField
              id="form2-result"
              label="Result (%)"
              variant="outlined"
              className={styles.textfield}
              value={form2Result}
              onFocus={(e) => handleFocusForm2(e)}
            />
          </Col>
        </Row>
      </form>
    </Layout>
  )
}