import React from "react"
import styles from "./Video.module.css"
export default ({ data, index }) => {
  return (
    <div key={`content_item_${index}`} className={styles.container}>
      <a
        className={styles.link}
        href={`https://www.youtube.com/watch?v=${data.id.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <div
          style={{
            backgroundImage: `url(${data.snippet.thumbnails.medium.url})`,
          }}
          className={styles.thumbnail}
        ></div>
        <h3 className={styles.title}>{data.snippet.title}</h3>
        <time dateTime={data.snippet.publishedAt}>
          {new Date(data.snippet.publishedAt).toLocaleDateString() +
            " " +
            new Date(data.snippet.publishedAt).toLocaleTimeString()}
        </time>
      </a>
    </div>
  )
}
