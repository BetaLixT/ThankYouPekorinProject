import "../components/common"

import * as React from "react"
import { Link } from "gatsby"

import "../styles/index.css"

import twitterLogo from "../images/twitter-logo-blk.svg"
import youtoriLogo from "../images/youtori-logo-blk.png"
import placeHolderImage from "../images/Et2G4dMXUAED6mL.jpg"
import creditsImage from "../images/slime-credits.jpg"
import articleImage from "../images/yuka-article.jpg"
import backgroundImage from "../images/liobg.jpg"
import backgroundImageWebp from "../images/liobg.webp"
import webpCheck from "../components/webpCheck"

export default class IndexPage extends React.Component {


    state = {
        shown: false,
        isWebp: true
    };

    componentDidMount(){ 
        if (typeof document !== `undefined`) {
            webpCheck('lossy', function (feature, isSupported) {
                if(!isSupported)
                {
                    document.getElementById("background").style.backgroundImage = "url('" + backgroundImage + "')"
                }
              });
          }
    } 

    render() {
        return (
            <div id="index-main">
                <div id="background" style={{backgroundImage: "url('" + backgroundImageWebp + "')"}}></div>
                <div id="above-navigation">
                    <div id="home-top-nav">
                        <h2 class="nav-content">Thank You Pekorin</h2>
                        <a className="nav-content-right navbar-icon" href="https://www.youtube.com/channel/UCvhCkCIlULdT8d_d8Mu6DZQ">
                            <img
                            alt="youtube logo"
                            src={youtoriLogo}
                            height={25}
                            />
                        </a>
                        <a className="nav-content-right navbar-icon" href="https://twitter.com/KFP_TheOffice">
                            <img
                            alt="twitter logo"
                            src={twitterLogo}
                            height={25}
                            />
                        </a>
                    </div>
                </div>
                <div id="navigation">
                <span role="button" tabIndex="0" class="arrow-button" onClick={() => {  }}>
                    <span id="sidenav-toggle" class="arrow"><span></span><span></span></span>
                </span>
                    <div className="common-content-container home-nav-contents">
                    <h2>Projects</h2>
                        <div className="nav-category">
                            <Link to="/messages">
                                <img src={placeHolderImage}/>
                                Messages
                            </Link>
                        </div>
                        <div className="nav-category">
                            <Link to="/minecraft">
                                <img src={placeHolderImage}/>
                                Minecraft
                            </Link>
                        </div>
                        <div className="nav-category">
                            <Link to="/article">
                                <img src={articleImage}/>
                                Article
                            </Link>
                        </div>
                        <div className="nav-category">
                            <Link to="/credits">
                                <img src={creditsImage}/>
                                Credits
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
	
	scriptLoaded(){
	}
}