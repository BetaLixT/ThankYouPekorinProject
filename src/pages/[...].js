  
import React from "react"
import { Router } from "@reach/router"
import Index from "../page-components/index"
import Seo from "../components/seo"
import Messages from "../page-components/messages"
import Minecraft from "../page-components/minecraft"
import Article from "../page-components/article"
import Credits from "../page-components/credits"



const App = () => {
  return (
    <div>
      <Seo title="VivaLaKiara - From the KFP"
        description="The KFP celebrates Tenchou's Birthday with a fiery passion around the world!"
        image="https://vivalakiara.com/lio-meta-art.jpg"/>
      <Router basepath="/">
        <Index path="/" />
        <Messages path="/messages" />
        <Minecraft path="/minecraft" />
        <Article path="/article" />
        <Credits path="/credits" />
      </Router>
    </div>
  )
}
export default App