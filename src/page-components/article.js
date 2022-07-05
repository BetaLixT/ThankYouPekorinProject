import "../components/common"
import BackgroundImage from "../images/dot-r-cb6f51.png"
// import "../styles/kfn/thankYou.css"

import * as React from "react"

import NavigationBar from "../components/navigation"

export default class ThankYouPage extends React.Component {
    
    state = {
    };

    render() {
        return (
            <div>
                <div id="atk-background"></div>
                <NavigationBar siteTitle="Million Chickens" />
                <div className="background-image" style={{backgroundImage: "url('" + BackgroundImage + "')"}}></div>
                <div className="common-content-container">
				<div className="articles long">
                    <h2 class="c1 c5" id="h.7i9v5nup17my"><span class="c12">Welcome Back Pekorin</span></h2>
                    <div><p><span>Another event, another set of projects.</span></p>
                    <p class="c0"><span class="c2">Kiara's birthday is happening and projects are popping off like the fireworks I can hear writing this on the 4th of July.</span></p>
                    <p class="c0"><span class="c2">It's been months since Pekorin has left last, and months more since he initially left. I can still remember that day, and how undoubtedly sad not only I, but the other office staff and KFP members were to see you go, you were our General and Grandpa, the one who'd fill the office with smoke and the stench of alcohol from long hours working, but we loved every second of it. And although it's no lie that we were sad to see you go, it couldn't compare to our joy to see you back in YT and Twitter. Even Kiara noticed your return in YT chat!  Your contributions to KFP are unlike any other chicken, and your impact on us and the community will be remembered and looked up to for generations to come, whether it be starting The Office, the biggest and most successful project server in Hololive, or starting Viva la Kiara all those years ago.</span></p>
                    <p class="c0"><span class="c2">Honestly, summing up everything that you've done for the community and for us is a list too long to force Beta to copy and paste, so I'd just like to thank you. You might not be coming back for projects, but we'd all like to thank you for your service, and immense dedication to not only Kiara, but to KFP, and your help in playing a big role growing the community into what it has become today.</span></p>
                    <p class="c0"><span class="c2">I wouldn't have it any other way. </span></p>
                    <p class="c1"><span class="c4">-by Apollo, not KFN team</span></p></div>
				</div>
                </div>
            </div>
        )
    }
}
