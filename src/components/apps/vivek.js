import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about vivek" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen ubuntu-font">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/pravin.png" alt="Pravin Bhagade" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Pravin Bhagade</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Platform Security Engineer/Backline Engineer!</span></div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a Staff <span className=" font-medium">Product Specialist</span> at <a href="https://cloudera.com/" rel="noreferrer" target="_blank">Cloudera</a>.</li>
                <li className=" mt-3 list-building"> I enjoy solving Linux/Security related issues.</li>
                <li className=" mt-3 list-time"> Apart from work I play PS4 and watch anime series <a href="https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A" target="_blank" rel="noreferrer"> tom scott's videos.</a></li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        VACOE
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2008 - 2012</div>
                    <div className=" text-sm md:text-base">E & TC</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup> (NES Shrirampur)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2006 - 2008</div>
                    <div className=" text-sm md:text-base"> Science</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    RHCSA, RHCE, CKA, HDPCA, AWS, Openshift
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Hadoop Security and its conmponents!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="vivek git" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">

                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And ofcourse,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="vivek linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "economist.com Unlocked",
            date: "Mar 2021",
            link: "https://github.com/vivek9patel/economist.com-unlocked",
            description: [
                "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
            ],
            domains: ["javascript", "chrome-extension"]
        },
        {
            name: "Flutter banking app",
            date: "Jan 2021",
            link: "https://github.com/vivek9patel/flutter-banking-app",
            description: [
                "A Flutter & Firebase project for creating transactions between different Users and displaying the history of transactions done by all.",
            ],
            domains: ["flutter", "firestore", "dart", "firebase auth"]
        },
        {
            name: "CPU scheduling application",
            date: "Dec 2020",
            link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
            description: [
                "React Native Application to visualize the CPU Scheduling algorithms with different Processes and Animations with gannt chart.",
            ],
            domains: ["react-native", "javascript"]
        },
        {
            name: "Meditech Healthcare WebApp",
            date: "Nov 2020",
            link: "https://github.com/vivek9patel/Meditech-Healthcare",
            description: [
                "Developed Web Application to predict and diagnose diseases from x-ray images.",
            ],
            domains: ["javascript", "html5", "sass", "firebase", "tensorflow"]
        },
        {
            name: "Problem Recommendation System",
            date: "Sep 2020",
            link: "https://github.com/vivek9patel/Improve-Codeforces",
            description: [
                "Django web application to suggest practice problems from the areas in which the user struggles to get pass in code-forces.",
            ],
            domains: ["django", "python", "codeforces-api", "javascript"]
        },
        {
            name: "Cleanliness Automation",
            date: "Dec 2019",
            link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
            description: [
                "Developed Web Applications to automate Garbage collection and extraction systems for SSIP hackathon",
            ],
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">{project.name.toLowerCase()}</div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Akhil_s_naik_resume.pdf" title="akhil s naik resume" frameBorder="0"></iframe>
    )
}
