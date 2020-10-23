import React from "react"
import styles from "./Card.module.css"
export default ({ name, src, label }) => {
  return (
    <label className={styles.container}>
      <input type="radio" name={name} className={styles.radio} />
      <img src={src} className={styles.img} />
      <span className={styles.span}>{label}</span>
    </label>
  )
}
