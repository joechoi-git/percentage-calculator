import React from "react"
import { Paper } from "@material-ui/core"
import Layout from "../components/layout"
import styles from "./page.module.css"

export default function NotFound() {
    return (
        <Layout location="/404">
            <Paper elevation={3} className={styles.paper}>
                <h1 className={styles.h1Xl}>Page not found</h1>
            </Paper>
        </Layout>  
    )
}