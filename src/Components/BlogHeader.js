import "./BlogHeader.css"
import fight from "../Images/fight.png"
import trojan from '../Images/trojans.png';

import {Link as LinkRedirect} from "react-router-dom";

export default function BlogHeader() {
    return (
        <div className="blogPage">
            <div className="titleBg">
                SC ARC Blog
            </div>
            <div className="blogEntries">
                <LinkRedirect to='entry1'>
                    <div className="blogEntry">
                        <div className="entryImage">
                            <img src={trojan} alt="trojan" className="entryImage"></img>
                        </div>
                        <div className="entryText">
                            <h2 className="entryTitle">Entry 1</h2>
                            <p>
                                Description："Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </LinkRedirect>
                
                <LinkRedirect to='entry2'>
                    <div className="blogEntry">
                        <div className="entryImage">
                            <img src={trojan} alt="trojan" className="entryImage"></img>
                        </div>
                        <div className="entryText">
                            <h2 className="entryTitle">Entry 2</h2>
                            <p>
                                Description："Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </LinkRedirect>
            </div>
        </div>
    )
}