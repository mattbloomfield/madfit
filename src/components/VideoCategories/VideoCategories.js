import React from "react"
import videos from "../../data/videos.json"
import VideoCategory from "../VideoCategory/VideoCategory"

const Videos = () => (
  <div>
    {categorizeVideos(videos).map((category, index) => {
      return (
        <VideoCategory
          category={category}
          key={`Category_${index}`}
        ></VideoCategory>
      )
    })}
  </div>
)

const categorizeVideos = videos => {
  const categories = {
    arms: {
      label: "Arms",
      terms: ["arm", "bicep", "tricep", "forearm", "upper body"],
      videos: [],
    },
    legs: {
      label: "Legs",
      terms: ["leg", "thigh", "calf"],
      videos: [],
    },
    booty: {
      label: "Booty",
      terms: ["booty", "butt", "glute"],
      videos: [],
    },
    core: {
      label: "Core",
      terms: ["abs", "ab", "sixpack", "stomach", "upper body", "back"],
      videos: [],
    },
    cardio: {
      label: "Cardio",
      terms: ["cardio"],
      videos: [],
    },
    dance: {
      label: "Dance",
      terms: ["dance", "party"],
      videos: [],
    },
    hiit: {
      label: "HIIT",
      terms: ["hiit"],
      videos: [],
    },
    noEquipment: {
      label: "No Equipment",
      terms: ["no equipment"],
      videos: [],
    },
    noJumping: {
      label: "No Jumping",
      terms: ["no jumping"],
      videos: [],
    },
    fullBody: {
      label: "Full Body",
      terms: ["full body"],
      videos: [],
    },
    stretch: {
      label: "Stretch",
      terms: ["stretch"],
      videos: [],
    },
  }
  for (let i = 0; i < videos.length; i++) {
    for (const c in categories) {
      let included = false
      categories[c].terms.forEach(term => {
        if (videos[i].snippet.title.toLowerCase().includes(term)) {
          included = true
        }
      })
      if (included) {
        categories[c].videos.push(videos[i])
      }
    }
  }
  return objToArr(categories)
}

const objToArr = obj => {
  const arr = []
  for (const prop in obj) {
    obj[prop]._id = prop
    arr.push(obj[prop])
  }
  return arr
}

export default Videos
