import "../components/common"
import * as React from "react"

import Credits from "../components/credits"
import NavigationBar from "../components/navigation"

import ContentNavigation from "../components/contentNavigation"
import GoToTop from "../components/goToTop"

import BackgroundImage from "../images/dot-e76f51.png"
import creditSets from "../../content/credits.json"


export default class MemberOriginsPage extends React.Component {
    state = {}

    componentDidMount() {
        if (typeof window !== `undefined`) {
        }
    }

    render() {
        return (
            <div>
                <div className="background-image" style={{backgroundImage: "url('" + BackgroundImage + "')"}}></div>
                <NavigationBar/>
                <div className="common-content-with-nav-container">
                    <ContentNavigation sections={creditSets} />
                    {creditSets.map((creditSet) => {
                        return <Credits title={creditSet.name} className="articles credit-container" creditArray={creditSet.credits} textSection={creditSet.textSection} sectionCreditsDetailed={creditSet.sectionCreditsDetailed} sectionCredits={creditSet.sectionCredits} />
                    })}
                </div>
                <GoToTop />
            </div>
        )
    }
}