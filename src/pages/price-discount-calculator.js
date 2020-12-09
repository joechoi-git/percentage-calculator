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

export default function PriceDiscount() {
    const [input1, setInput1] = React.useState("");
    const [input2, setInput2] = React.useState("");
    const [result1, setResult1] = React.useState("");
    const [result2, setResult2] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult1("");
        setResult2("");
        document.getElementById("result1").style.color="black";
        document.getElementById("result2").style.color="black";
        try {
            if (input1!=="" && input2!=="") {
                setInput1(parseFloat(input1));
                setInput2(parseFloat(input2));
                let output1 = parseFloat(input1 * (input2 / 100));
                let output2 = parseFloat(input1) - parseFloat(output1);
                setResult1(`${output1.toFixed(2)}`);
                setResult2(`${output2.toFixed(2)}`);
                if (output1 >= 0) {
                    document.getElementById("result1").style.color="green";
                    document.getElementById("result2").style.color="green";
                } else {
                    document.getElementById("result1").style.color="red";
                    document.getElementById("result2").style.color="red";
                }
            }
        } catch (error) {
        }
    }
    const handleFocus = (e) => {
        try {
            e.target.select();
        } catch (error) {
        }
    }
    return (
        <Layout location="/price-discount-calculator">
            <SEO 
                title="Percent Calculator Pro | Price Discount" 
                description="PercentCalculatorPro.com is a free online tool to calculate percentages. Use this tool to calculate tips, taxes, success rates, stock options, and discounts." 
                image="https://percentcalculatorpro.com/share.jpg" 
                url="https://percentcalculatorpro.com/price-discount-calculator" 
            />
            <Paper elevation={3} className={styles.paper}>
                <h1 className={styles.h2}>Price Discount</h1>
                <p>E.g. If an item's original cost is $59.99 and it goes on sale by 30%, then what is the final price?</p>
                <form onSubmit={handleSubmit}>
                    <Row className={styles.row}>
                        <Col sm={3} className={styles.col}>
                        <TextField
                            label="Original Price"
                            variant="outlined"
                            type="number"
                            className={styles.textfield}
                            value={input1}
                            onChange={(e) => setInput1(e.target.value.trim())}
                        />
                        </Col>
                        <Col sm={3} className={styles.col}>
                        <TextField
                            label="Discount %"
                            variant="outlined"
                            type="number"
                            className={styles.textfield}
                            value={input2}
                            onChange={(e) => setInput2(e.target.value.trim())}
                        />
                        </Col> 
                        <Col sm={2} className={styles.col}>
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
                        <Col sm={2} className={styles.col}>
                        <ResultTextField
                            id="result1"
                            label="Your Saving"
                            variant="outlined"
                            className={styles.textfield}
                            value={result1}
                            onFocus={(e) => handleFocus(e)}
                        />
                        </Col>
                        <Col sm={2} className={styles.col}>
                        <ResultTextField
                            id="result2"
                            label="Final Price"
                            variant="outlined"
                            className={styles.textfield}
                            value={result2}
                            onFocus={(e) => handleFocus(e)}
                        />
                        </Col>
                    </Row>
                </form>
            </Paper>
        </Layout>  
    )
}