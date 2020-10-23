import React, { Component } from "react"
import styles from "./VideoCategory.module.css"
import Video from "../Video/Video"

class VideoCategory extends Component {
  constructor(props) {
    super()

    this.state = {
      videos: props.category.videos,
      searchResults: [],
      searchQuery: "",
    }
  }

  searchData = e => {
    const { videos } = this.state
    const query = e.target.value
    const queryResult = videos.filter(video => {
      let included = false
      if (video.snippet.title.toLowerCase().includes(query)) included = true
      if (video.snippet.description.toLowerCase().includes(query))
        included = true
      return included
    })
    this.setState({ searchQuery: query, searchResults: queryResult })
  }

  render() {
    const { category } = this.props
    const { videos, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? videos : searchResults
    return (
      <div className="section" id={category._id}>
        <h2>
          {category.label} ({videos.length} Videos)
        </h2>
        <input
          id="Search"
          type="text"
          placeholder="Search"
          onChange={this.searchData}
          value={searchQuery}
        />
        <div className={styles.category}>
          {queryResults.map((meta, vidIndex) => {
            return <Video data={meta} index={vidIndex}></Video>
          })}
        </div>
      </div>
    )
  }
}

export default VideoCategory
