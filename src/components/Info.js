import React from 'react';
import self from '../img/self.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(185, 85, 211)", "rgb(247, 10, 7)"];
/*
I highly recommend using a gradient generator like https://paytonjewell.github.io/gradient-generator/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */



/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

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
        ["📖", "reading"], // Same as above, change the emojis to match / relate to your hobbies or interests.
        ["🎥", "movies"],
        ["🚣‍♂️", "kayaking"],
        ["🌶", "spicy food"]
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            liveLink: "paytonjewell.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            sourceLink: "paytonjewell.dev", // this should be a link to the **repository** of the project, where the code is hosted. Github, Phabricator, etc.
        },
        {
            title: "Project 2",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
        {
            title: "Project 3",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
        {
            title: "Project 4",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
    ]
}

// leave these alone unless you know how to work with FontAwesome and want to change to your liking :)

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

