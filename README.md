# Gerardo Martinez | Linktree

A Linktree-style page built with React. It has my profile and links to my LinkedIn, GitHub, portfolio, and resume.

**Live site:** https://gerardo2106.github.io/linktree-react-app/

## Features

- Profile section with my photo, name, and a short bio
- Link cards for LinkedIn, GitHub, my portfolio, and my resume
- Dark/light mode toggle that remembers your choice
- A greeting that changes based on the time of day when the page loads
- Responsive layout that works on phones and laptops

## Built with

- React + Vite
- Plain CSS with CSS variables
- react-icons for the LinkedIn and GitHub logos
- Poppins from Google Fonts

## Running it locally

    git clone https://github.com/Gerardo2106/linktree-react-app.git
    cd linktree-react-app
    npm install
    npm run dev

Then open the link it gives you (usually http://localhost:5173).

## JS features: dark/light mode toggle

**What it does:** The button at the bottom switches the page between a dark green theme and a light theme. Your choice is saved, so if you refresh or come back later, it stays the way you left it.

**Why I picked it:** I picked it because people have different preferences. Some like a darker theme and others like a lighter one, so I wanted the page to be comfortable for everyone.

**What was tricky:** Since I’m new to React and more used to plain HTML, changing the colors on the <body> made the most sense to me, since that’s how I’d do it in HTML. The tricky part was coming to find out that React doesn’t control the <body> directly. With some help from AI, I learned that React uses useEffect for things outside the component like this, so I used it to add the class to the <body> whenever the theme changes. To make it remember your choice after a refresh, it's saved in localStorage and loaded back when the page opens.

**What I'd improve:** I'd have it match the visitor's device setting (dark or light mode) on their first visit instead of always starting dark. I'd also add a smooth color transition when switching. These seem a bit more challenging, but I’m up for it if I come back to revise it.

I also added a time-of-day greeting that shows “Good morning,” “Good afternoon,” or “Good evening” when the page first loads, then fades out.
