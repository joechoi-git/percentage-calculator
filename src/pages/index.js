import React from "react"
import { Row, Col } from "react-grid-system"
import { Button, TextField, Paper } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./page.module.css"

const ResultTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-input': {
        fontWeight: 'bolder',
        },
    },
})(TextField);

export default function Home() {
    const [input1, setInput1] = React.useState("");
    const [input2, setInput2] = React.useState("");
    const [result, setResult] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult("");
        document.getElementById("result").style.color="black";
        try {
            if (input1!=="" && input2!=="") {
                setInput1(parseFloat(input1));
                setInput2(parseFloat(input2));
                let output = ((input2 / input1) - 1) * 100;
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
            // navigator.clipboard.writeText(result);
        } catch (error) {
        }
    }
    return (
        <Layout location="/">
            <SEO 
            title="Percent Calculator Pro" 
            description="Percent Calculator Pro is a free online tool to calculate percentages." 
            image="https://percentcalculatorpro.com/share.jpg" 
            url="https://percentcalculatorpro.com" 
            />
            <Paper elevation={3} className={styles.paper}>
                <h2 className={styles.h2}>Percentage Increase or Decrease (X to Y)</h2>
                <p>E.g. If the price moves from $1.50 to $2.25, what is the % difference?</p>
                <form onSubmit={handleSubmit}>
                    <Row className={styles.row}>
                        <Col sm={3} className={styles.col}>
                            <TextField
                            label="X (any number)"
                            variant="outlined"
                            type="number"
                            className={styles.textfield}
                            value={input1}
                            onChange={(e) => setInput1(e.target.value.trim())}
                            />
                        </Col>
                        <Col sm={3} className={styles.col}>
                            <TextField
                            label="Y (any number)"
                            variant="outlined"
                            type="number"
                            className={styles.textfield}
                            value={input2}
                            onChange={(e) => setInput2(e.target.value.trim())}
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
                            label="Result (%)"
                            variant="outlined"
                            className={styles.textfield}
                            value={result}
                            onFocus={(e) => handleFocus(e)}
                            />
                        </Col>
                    </Row>
                </form>
            </Paper>
        </Layout>  
    )
}