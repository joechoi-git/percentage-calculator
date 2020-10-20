import React from "react"
import { TextField, Paper } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./page.module.css"
import ImageBasketbalPlayer from "../images/basketball-player.png"
import ImageSalesItem from "../images/sales-item.png"

const ResultTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-input': {
        fontWeight: 'bolder',
        },
    },
})(TextField);

export default function PercentageCalculator() {
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
                let output = (input1 / input2) * 100;
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
                description="PercentCalculatorPro.com is a free online tool to calculate percentages. Use this tool to calculate tips, taxes, success rates, stock options, and discounts." 
                image="https://percentcalculatorpro.com/share.jpg" 
                url="https://percentcalculatorpro.com" 
            />
            <Paper elevation={3} className={styles.paper}>
                <h1 className={styles.h1}>PercentCalculatorPro.com is a free online tool to calculate percentages. Use this tool to calculate tips, taxes, success rates, stock options, and discounts.</h1>

                <Link to="/success-rate" className={styles.link}>Success Rate</Link>
                <p className={styles.paragraph}>
                    <Link to="/success-rate"> 
                        <img 
                            src={ImageBasketbalPlayer}
                            className={styles.image}
                            alt="Calculate success rate for a basketball player"
                        />
                    </Link>
                    It is useful to know about the success rate. Success rate is one of the key metrics to measure the performance of a sports player. In baseball, a player's batting average is one of the core metrics to evaluate skill level. In basketball, a player with the higher shooting percentage has the advantage.
                </p>

                <Link to="/price-discount" className={styles.link}>Price Discount</Link>
                <p className={styles.paragraph}>
                    <Link to="/price-discount"> 
                        <img 
                            src={ImageSalesItem}
                            className={styles.image}
                            alt="Calculate price discount to save money"
                        />
                    </Link>
                    Buying items at a lower price is always the prudent thing to do. Sometimes, we will wait until the next holiday just for the sales season to kick in. In other times, when we go shopping, we often see stores advertising that their items are 10% off, 20% off, 30% off, and etc. You can use price discount calculator to know exactly how much money you will be saving by buying this item at a discounted price.
                </p>


            </Paper>
        </Layout>  
    )
}