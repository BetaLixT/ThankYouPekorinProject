  
import React from "react"
import { Router } from "@reach/router"
import Index from "../page-components/index"
import Seo from "../components/seo"


const App = () => {
  return (
    <div>
      <Seo title="VivaLaKiara - From the KFP"
        description="The KFP celebrates Tenchou's Birthday with a fiery passion around the world!"
        image="https://vivalakiara.com/lio-meta-art.jpg"/>
      <Router basepath="/">
        <Index path="/" />
      </Router>
    </div>
  )
}
export default App