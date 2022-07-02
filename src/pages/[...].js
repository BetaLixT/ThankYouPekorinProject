  
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
      <Seo title="VivaLaPekorin"
        description="VIVA LA PEKORIN!!"
        image="https://vivalapekorin.vercel.app/PekorinWelcomeBackMeta.jpeg"/>
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
