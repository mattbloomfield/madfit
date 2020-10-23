import React from "react"
import { Link } from "gatsby"
import styles from "./Header.module.css"
export default () => {
  return (
    <navbar className={styles.nav}>
      <Link className={styles.link} to="/">
        <h1 id="Logo">MadFit</h1>
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} to="/videos">
          All Videos
        </Link>
      </div>
    </navbar>
  )
}
