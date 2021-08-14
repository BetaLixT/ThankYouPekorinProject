import * as React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"


import twitterLogo from "../images/twitter-logo-blk.svg"
import youtoriLogo from "../images/youtori-logo-blk.png"
import hamburgerLogo from "../images/134216_menu_lines_hamburger_icon.png"


const navbarId = "navbar"
const paddingId = "nav-padding"
export default class NavigationBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { className: null, isOpen: false }
        this.state.className = props.className
      }

    componentDidMount() {
        if (typeof document !== `undefined`) {
            var navheight = document.getElementById(navbarId).clientHeight;
            document.getElementById(paddingId).style.paddingTop = navheight + "px";
            this.showOrHide()
            window.addEventListener("scroll", this.showOrHide)
          }
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.showOrHide)
    }
    showOrHide()
    {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
            {
                document.getElementById(navbarId).classList.add("scrolling");
            } 
            else 
            {
                document.getElementById(navbarId).classList.remove("scrolling");
            }
    }

    toggleContents(isOpen)
    {
        if(isOpen)
        {
            document.getElementById(navbarId).classList.remove('active')
            this.setState({ isOpen: false })
        }
        else
        {
            document.getElementById(navbarId).classList.add('active')
            this.setState({ isOpen: true })
        }
    }
    
     // navbar-brand
      render()
      {
          return(
            <div>
                <div id={navbarId} className="scrolling" bg="primary" variant="dark" expand="lg" fixed="top">
                    <div className="nav-content-title-div"><Link className="nav-content title" to="/"><h2>Viva La Pekorin</h2></Link></div>
                    <a className="right mobile-hamburger" onClick={() => { this.toggleContents(this.state.isOpen); this.setState({ isOpen: !this.state.isOpen }); }}>
                        <img
                        alt="twitter logo"
                        src={hamburgerLogo}
                        />
                    </a>
                    <div className="nav-container">
                        <Link className="nav-content pagelink" to="/messages"><p>Messages</p></Link>
                        <Link className="nav-content pagelink" to="/minecraft"><p>Minecraft</p></Link>
                        <Link className="nav-content pagelink" to="/article"><p>Article</p></Link>
                        <Link className="nav-content pagelink" to="/credits"><p>Credits</p></Link>
                        <a className="nav-content right navbar-icon" href="https://www.youtube.com/channel/UCvhCkCIlULdT8d_d8Mu6DZQ">
                            <img
                            alt="youtube logo"
                            src={youtoriLogo}
                            height={25}
                            />
                        </a>
                        <a className="nav-content right navbar-icon" href="https://twitter.com/KFP_TheOffice">
                            <img
                            alt="twitter logo"
                            src={twitterLogo}
                            height={25}
                            />
                        </a>
                    </div>
                </div>
                <div id={paddingId}></div>
            </div>
          )
      }
}

NavigationBar.propTypes = {
    hideMute: PropTypes.bool
};
  
NavigationBar.defaultProps = {
    hideMute: false
  };