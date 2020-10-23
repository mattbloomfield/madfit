import React from "react"
import Header from "../components/Header/Header"
import Card from "../components/Card/Card"

import fullBody from "../img/fullBody.png"
import arms from "../img/arm.png"
import legs from "../img/leg.png"
import abs from "../img/abs.png"
import booty from "../img/booty.png"

export default function Home() {
  return (
    <div>
      <Header />
      <form>
        <h2>Choose your focus</h2>
        <div className="cards">
          <Card name="focus" src={fullBody} label="Full Body" />
          <Card name="focus" src={arms} label="Arms" />
          <Card name="focus" src={legs} label="Legs" />
          <Card name="focus" src={abs} label="Core" />
          <Card name="focus" src={booty} label="Booty" />
        </div>
        <button>Next</button>
      </form>
    </div>
  )
}
