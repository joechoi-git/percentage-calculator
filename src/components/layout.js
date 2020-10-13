import React from "react"
// import { Link } from "gatsby"
import styles from "./layout.module.css"

console.log(styles.layout);

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header style={{ marginBottom: `1.5rem` }}>
        <h3>PercentCalculatorPro.com</h3>
      </header>
      {children}
      <footer>
        <p>All rights reserved.</p>
      </footer>
    </div>
  )
}