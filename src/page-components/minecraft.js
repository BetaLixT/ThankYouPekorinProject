import "../components/common"
import * as React from "react"

import NavigationBar from "../components/navigation"

import Button from "react-bootstrap/Button"
import MinecraftPopup from "../components/minecraftPopup"
import BackgroundImage from "../images/dot-r-cb6f51.png"

export default class MinecraftPage extends React.Component {

    componentDidMount() {
        if (typeof document !== `undefined`) {
            this.resizeVideoIframes()
            window.addEventListener('resize', this.resizeVideoIframes)
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeVideoIframes)
    }

    resizeVideoIframes()
    {
        var references =  document.getElementsByClassName("youtube-iframe");
        for (let reference of references) {
            reference.style.height = (reference.clientWidth * 9 / 16) + "px";
        }
    }

    render() {
        return (
            <div id="video-content-body">
                <MinecraftPopup onClose={onCloseExploreMinecraft} source={"https://mcmap.vivalakiara.com/#KFPv1:-755:112:1846:0:1.27:1.51:0:0:free"}/>
                <NavigationBar hideMute={true}/>
                <div className="background-image" style={{backgroundImage: "url('" + BackgroundImage + "')"}}></div>
                
                <div className="common-content-container">
                    <div className="articles-nobg">
                        <h1>Qui ullamco exercitation!</h1>
                        <p>Aliquip qui sunt ut Lorem cupidatat incididunt nisi est adipisicing laboris anim excepteur mollit. Ex officia dolor sunt cupidatat proident aute ipsum tempor laborum anim. Lorem anim anim magna occaecat dolor et ut fugiat ullamco aliqua. Magna id do aute esse proident sit pariatur ad aliqua veniam proident. Eiusmod sint amet laborum sit reprehenderit incididunt. Irure enim laborum eu commodo consequat minim eiusmod pariatur officia dolore cupidatat exercitation nisi. Cillum qui cillum culpa laborum magna esse velit mollit.</p>
                        <h2>Explore the server!</h2>
                        <Button className="explore-server-btn" variant="primary" size="lg" onClick={openExploreMinecraft}>
                            Explore
                        </Button>
                    </div>
                    <iframe 
                        className="youtube-iframe" width="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div>
        )
    }
}

function openExploreMinecraft() {
    
    document.getElementById("minecraft-popup-background").style.visibility = "visible"
    document.getElementById("video-content-body").style.overflowY = "hidden"
}

function onCloseExploreMinecraft() {
    document.getElementById("video-content-body").style.overflowY = "scroll"
}