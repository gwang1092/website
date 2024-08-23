import { v4 as uuidv4 } from "uuid"; 
import b4la from '../Images/B4LA_trimmed.mp4'
import group from '../Images/group2.png';
import baum from '../Images/baum.png';
import wires from '../Images/wires.png';
import fight from '../Images/fight.png';
import repair from '../Images/repair.png'; 

import sac_vid from '../Images/sac_fullvid.mp4'
import sac_teamphoto from '../Images/sac_teamphoto.png'

const video = false;
const image = true; 

const dataSlider = [
    {
        id: uuidv4(),
        title: "Sacramento Bot Battles Tournament",
        text: "We had a great tournament performance, finishing 4th out of 25 teams and winning 3 knockout rounds.",
        type: video,
        vid: sac_vid
    },
    {
        id: uuidv4(),
        title: "Sacramento: team photo",
        text: "Congrats to the team for an outstanding tournament!",
        type: image,
        img: sac_teamphoto
    },
    {
        id: uuidv4(),
        title: "Battle for Los Angeles",
        text: "Competing at the Battle for Los Angeles tournament.",
        type: video, 
        vid: b4la
    },
    {
        id: uuidv4(),
        title: "Group Photo",
        text: "Team photo at the Battle for Los Angeles tournament, where we competed with Queen of Hearts. ",
        type: image, 
        img: group
    },
    {
        id: uuidv4(),
        title: "Manufacturing",
        text: "Making parts at the Baum Family Makerspace. ",
        type: image, 
        img: baum
    },
    {
        id: uuidv4(),
        title: "Competing",
        text: "Queen of Hearts fighting our first opponent at the Battle for Los Angeles tournament. ",
        type: image, 
        img: fight
    },
    {
        id: uuidv4(),
        title: "Re-configuring Robot",
        text: "Queen of Hearts has 3 different configurations, which are effective against different opponents! ", 
        type: image, 
        img: repair
    },
]

export default dataSlider; 