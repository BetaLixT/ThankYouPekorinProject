import "../components/common"

import * as React from "react"

import NavigationBar from "../components/navigation"
import Gallery from "../components/react-photo-gallery/Gallery"
import Message from "../components/Message"

import BackgroundImage from "../images/dot-r-cb6f51.png"
import messagesData from "../../content/messages.json"

const Messages = () => (
  <div>
    <div className="background-image" style={{backgroundImage: "url('" + BackgroundImage + "')"}}></div>
    <NavigationBar/>
    <div className="common-content-container">
      <div className="articles-nobg">
          <h1>Messages for the General!</h1>
          <p>Laboris veniam amet duis occaecat deserunt ad esse veniam nulla anim. Id laborum anim officia quis commodo. Elit labore consectetur veniam excepteur nisi amet ullamco id laboris commodo excepteur. Magna consequat eu dolor est fugiat. Voluptate nulla minim proident ea voluptate consectetur ut. Non pariatur in occaecat duis minim occaecat duis amet. Laborum consectetur ea nostrud quis elit excepteur voluptate enim enim eiusmod reprehenderit veniam cillum et.</p>
      </div>
    </div>
    
    <div className="common-large-content-container">
        <Gallery photos={messagesData} margin={5} direction={"column"} renderImage={Message}/>
    </div>
  </div>
)

export default Messages
