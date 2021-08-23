import React from 'react';
import self from '../img/self.png';

export let colors = ["rgb(185, 85, 211)", "rgb(247, 10, 7)"];

export const info = {
    firstName: "James",
    lastName: "Antley",
    initials: "JEA", // first, middle, last
    position: "Full Stack Developer",
    selfPortrait: self,
    gradient: `linear-gradient(135deg, ${colors})`,
    miniBio: [
        ["☕️", "Fueled by coffee"],
        ["NC", "Based in Raleigh"],
        ["💼", "Freelance Developer"],
        ["✉️", "jimmy.antley@gmail.com"],
    ],
    socials: [
        ["https://github.com/jimmant91", githubIcon()],
        ["https://linkedin.com/in/jamesantley", linkedInIcon()],
        ["https://instagram.com/jame.antle", instagramIcon()],
        ["https://open.spotify.com/user/jimmysideburns?si=55c8f387a37141b3", spotifyIcon()]
    ],
    bio: " I'm a Virginia native, but have lived in North Carolina most of my life. I graduated from UNC Charlotte in 2013 with a Sociological Psych. degree. Since then, I have been a working professional in the field of scholarly publishing, which in turn, has made me more focused on my career as a developer. From 2020 til today, I've been focuing on web-development at my current position and have taught myself some of the basic fundamentals of JavaScript. I graduated from the UNC Coding Bootcamp in September of 2021 and am now a professional developer seeking full-time work!",
    hobbies: [
        ["📖", "reading"],
        ["🎥", "movies"],
        ["🚣‍♂️", "kayaking"],
        ["🌶", "spicy food"]
    ],
    portfolio: [
        {
            title: "The Tailorist",
            liveLink: "https://anneliserowan.github.io/the-tailorist/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            sourceLink: "https://github.com/Jimmant91/the-tailorist", // this should be a link to the **repository** of the project, where the code is hosted. Github, Phabricator, etc.
            description: "",
        },
        {
            title: "Workout Tracker",
            liveLink: "https://obscure-spire-84126.herokuapp.com/?id=6111f1c1bbdf67001553b746",
            sourceLink: "https://github.com/Jimmant91/Workout_Tracker",
            description: "",
        },
        {
            title: "Weather Dashboard",
            liveLink: "https://jimmant91.github.io/Weather_Dashboard/",
            sourceLink: "https://github.com/Jimmant91/Weather_Dashboard",
            description: "",
        },
        {
            title: "Project 4",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
            description: "",
        },
    ]
}


function githubIcon() {
    return <i className="fa fa-github" aria-hidden="true"/>
};

function instagramIcon() {
    return <i className="fa fa-instagram" aria-hidden="true"/>
};

function linkedInIcon() {
    return <i className="fa fa-linkedin" aria-hidden="true"/>
};

function spotifyIcon() {
    return <i className="fa fa-spotify" aria-hidden="true"/>
};
