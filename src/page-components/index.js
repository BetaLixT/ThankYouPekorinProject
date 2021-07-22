import "../components/common"

import * as React from "react"
import { Link } from "gatsby"

import "../styles/index.css"

import twitterLogo from "../images/twitter-logo-blk.svg"
import youtoriLogo from "../images/youtori-logo-blk.png"
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
                    <div id="home-social">
                    </div>
                    <div className="home-title">Thank You Pekorin!</div>
                    <div className="home-nav-contents">
                        <div className="nav-category">
                            <h4>KFP Cats</h4>
                            <ul>
                                <li><Link to="/birthday/cats">Cats of the KFP</Link></li>
                            </ul>
                        </div>
                        <div className="nav-category">
                            <h4>Birthday Song</h4>
                            <ul>
                                <li><Link to="/birthday/birthdaySong">Fiery Phoenix Queen</Link></li>
                            </ul>
                        </div>
                        <div className="nav-category">
                            <h4>Resurrection</h4>
                            <ul>
                                <li><Link to="/birthday/resurrection">Day of Remembrance</Link></li>
                            </ul>
                        </div>
                        <div className="nav-category">
                            <h4>Minecraft</h4>
                            <ul>
                                <li><Link to="/birthday/ciudad">Ciudad Del Fenix</Link></li>
                                <li><Link to="/birthday/automatedKfp">Automated KFP Restaurant</Link></li>
                            </ul>
                        </div>
                        <div className="nav-category">
                            <h4>From the KFP</h4>
                            <ul>
                                <li><Link to="/birthday/cameo">Cameo</Link></li>
                                <li><Link to="/birthday/messages">Birthday Messages</Link></li>
                                <li><Link to="/birthday/credits">Credits</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
	
	scriptLoaded(){
	}
}