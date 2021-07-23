import "../components/common"

import * as React from "react"

import NavigationBar from "../components/navigation"
import Gallery from "../components/react-photo-gallery/Gallery"
import Message from "../components/Message"

import BackgroundImage from "../images/dot-orange.png"
import messagesData from "../../content/messages.json"

const Messages = () => (
  <div>
    <div className="background-image" style={{backgroundImage: "url('" + BackgroundImage + "')"}}></div>
    <NavigationBar/>
    <div className="common-content-container">
      <div className="articles-nobg">
          <h1>Messages for the General!</h1>
          <p>From around the world, KFP employees have written messages of congratulations for their Tenchou on her birthday! From many languages, ages and time zones, with messages long and short, they all share a common goal: to wish the boss a happy birthday from the bottom of their hearts.</p>
      </div>
    </div>
    
    <div className="common-large-content-container blur">
        <Gallery photos={messagesData} margin={5} direction={"column"} renderImage={Message}/>
    </div>
  </div>
)

export default Messages
