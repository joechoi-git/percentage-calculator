import React from "react"
import { TextField, Paper } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./page.module.css"
import ImageBasketbalPlayer from "../images/basketball-player.png"
import ImageSalesItem from "../images/sales-item.png"
import ImageSalesTax from "../images/sales-tax.png"
import ImageTips from "../images/tips.png"
import ImageStockMarket from "../images/stock-market.png"

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
                    It is useful to know about the success rate. The success rate is one of the key metrics to measure the performance of a sports player. In baseball, a player's batting average is one of the core metrics to evaluate skill level. In basketball, a player with a higher shooting percentage has the advantage.
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
                    Buying items at a lower price is always the prudent thing to do. Sometimes, we will wait until the next holiday just for the sales season to kick in. At other times, when we go shopping, we often see stores advertising that their items are 10% off, 20% off, 30% off, etc. You can use the price discount calculator to know exactly how much money you will be saving by buying this item at a discounted price.
                </p>
                <Link to="/sales-tax" className={styles.link}>Sales Tax</Link>
                <p className={styles.paragraph}>
                    <Link to="/sales-tax"> 
                        <img 
                            src={ImageSalesTax}
                            className={styles.image}
                            alt="Calculate sales tax to compute final price"
                        />
                    </Link>
                    In many countries and states, we are required to pay sales tax or service fees on products and services. Tax percentage will be the same across many stores in the region because the tax rate is controlled by the local government. Unlike tips, sales tax is required. It is important to know about the sales tax percentage and calculate this in advance to buying the product or services. If you like to travel and shop, you may want to research the sales taxes to plan. Many travelers visit dutyfree stores as they do not charge any sales taxes.
                </p>
                <Link to="/tip-calculator" className={styles.link}>Tip Calculator</Link>
                <p className={styles.paragraph}>
                    <Link to="/tip-calculator"> 
                        <img 
                            src={ImageTips}
                            className={styles.image}
                            alt="Calculate tips to show your appreciation for the service"
                        />
                    </Link>
                    Although the tip is not required to pay, it is often customary to pay tips in some countries. You may find it surprising to find that people who work in the hospitality industry might heavily rely on tips to earn a livable income. This is because some employers account for potential tips that the service staff can earn and pay less money for their service staff. If you are inclined to pay tips, ask yourself how good was the service that you received. For exceptional service, we would recommend 20% to 25% tips. For average service, we would recommend 15% or 18% tips. If the service was below par, it is okay to pay anywhere from 0% to 10% tips.
                </p>
                <Link to="/stock-options" className={styles.link}>Stock Options</Link>
                <p className={styles.paragraph}>
                    <Link to="/stock-options"> 
                        <img 
                            src={ImageStockMarket}
                            className={styles.image}
                            alt="Calculate probabilty of stock options when buying puts or calls"
                        />
                    </Link>
                    Buying or selling a stock option contract comes with a bigger risk than buying shares. For investors and traders to make money with stock options, calculating the probability of the underlying stock price to go up or go down to a certain price by a certain date is absolutely critical for success. As an example, let's say that you want to buy a call option of stock that is trading at $18. You want to bet that in 5 days (your expiration date), the stock price will go above $25 (your strike price). Using this stock options calculator, you will learn that the stock price has to increase by 38.89% in 5 days to break even on your investment and make money on this contract. Knowing this info, will you still buy this call option?
                </p>
            </Paper>
        </Layout>  
    )
}