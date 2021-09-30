import React from 'react';
import Style from '../Portfolio.module.scss';
import theTailorist from '../img/theTailorist.png';
import workoutTracker from '../img/workoutTracker.png';
import weatherDashboard from '../img/weatherDashboard.png';
import teamGenerator from '../img/teamGenerator.png';
import herbYourEnthusiasm from '../img/herbYourEnthusiasm.png'
import followTheReader from '../img/followTheReader.png'
import {info, colors} from './Info';


export default function Portfolio() {
    let portfolioInfo = info.portfolio;

    let mocks = [theTailorist, workoutTracker, weatherDashboard, teamGenerator, herbYourEnthusiasm, followTheReader];

    function createGrid() {
        let results = [];
        let j = 0;
        for(let i = 0; i < portfolioInfo.length; i++) {
                results.push(
                    <div className={Style.block}>
                        <a target="_blank" rel="noopener noreferrer" href={info.portfolio[i].liveLink}><img className={Style.image} src={mocks[j++]}/></a>
                        <h1>{info.portfolio[i].title}</h1>
                        <a target="_blank" rel="noopener noreferrer" href={info.portfolio[i].sourceLink} style={{backgroundColor: colors[1]}} className={Style.source}>Source Code</a>
                        <br></br>
                        <p>{info.portfolio[i].description}</p>
                    </div>
                )
        }
        return results;
    }

    return (
       <main>
           <div className={Style.projectsGrid}>
               {createGrid()}
           </div>
       </main>
    );
};