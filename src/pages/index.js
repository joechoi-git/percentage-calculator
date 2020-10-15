import React from "react"
import { Button, TextField } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import { Row, Col } from "react-grid-system"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const ResultTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      fontWeight: 'bolder',
    },
  },
})(TextField);

export default function Home() {
  const [tab, setTab] = React.useState(0);
  const [form1Input1, setForm1Input1] = React.useState("");
  const [form1Input2, setForm1Input2] = React.useState("");
  const [form1Result, setForm1Result] = React.useState("");
  const [form2Input1, setForm2Input1] = React.useState("");
  const [form2Input2, setForm2Input2] = React.useState("");
  const [form2Result, setForm2Result] = React.useState("");

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

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
      <AppBar position="static">
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab label="% Change (x to y)" />
          <Tab label="% Compute (x out of y)" />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0} className={styles.tab}>
        <h2 className={styles.h2}>Percentage Change (X to Y)</h2>
        <p>E.g. If the price moves from $1.50 to $2.25, what is the % difference?</p>
        <form onSubmit={handleSubmitForm1}>
          <Row className={styles.row}>
            <Col sm={3} className={styles.col}>
              <TextField
                label="X (any number)"
                variant="outlined"
                type="number"
                className={styles.textfield}
                value={form1Input1}
                onChange={(e) => setForm1Input1(e.target.value.trim())}
              />
            </Col>
            <Col sm={3} className={styles.col}>
              <TextField
                label="Y (any number)"
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
      </TabPanel>
      <TabPanel value={tab} index={1} className={styles.tab}>
        <h2 className={styles.h2}>Percentage Compute (X out of Y) </h2>
        <p>E.g. $160 out of $750 is what percent?</p>
        <form onSubmit={handleSubmitForm2}>
          <Row className={styles.row}>
            <Col sm={3} className={styles.col}>
              <TextField
                label="X (any number)"
                variant="outlined"
                type="number"
                className={styles.textfield}
                value={form2Input1}
                onChange={(e) => setForm2Input1(e.target.value.trim())}
              />
            </Col>
            <Col sm={3} className={styles.col}>
              <TextField
                label="Y (any number)"
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
      </TabPanel>
    </Layout>  
  )
}