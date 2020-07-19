---
layout: default
title: 'Deploy React JS app in GithubPages'
parent: 'ReactJS'
grand_parent: Client Side
nav_order: 9
modifiedDate: 2020-02-16
comments: true
---

## How to build and deploy a React app to Github pages

### Prerequisite:
* Github account
* Github desktop app, Node.js and npm installed in your machine

#### Steps
* Create the React app:     `create-react-app [APP-NAME]`
    
* Go to the project repo:    `cd [APP-NAME]`
* Copy the src and public folder from already created React app if any
* Run your application:     `npm start`
* Push your changes to master

#### Deployment
* Install gh-pages
    ~~~
    npm install gh-pages — save-dev
    ~~~

* Add homepage property to package.json file
    ~~~
    "homepage": "http://[GITHUB-REPONAME].github.io/[GITHUB-REPONAME]"
    ~~~
* Add Deploy scripts under package.json file
    ~~~
    “scripts”: 
    {
        ...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
    ~~~
* Deploy it to GitHub Pages
    ~~~
    npm run deploy
    ~~~

A branch named gh-pages will be created at the GitHub repository and the pages will be served from here. 
Go to repository settings and setup source to the gh-pages branch

`Happy hacking!`



