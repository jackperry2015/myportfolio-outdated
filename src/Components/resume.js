import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid className="resume-grid">
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Serious&skinColor=Light"
                                alt="avatar"
                                style={{height: '400px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Jack Perry</h2>
                        <h4 style={{color: 'grey'}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #76C5FE', width: '100%'}}/>
                        <p>Hi there, this is just a brief breakdown of, well, whatever I could fit on the page. For my full Resume/CV, please
                            feel free to contact me via any of the methods I provided on my contact page and I'll happily 
                            send it along.
                        </p>
                        <hr style={{borderTop: '3px solid #76C5FE', width: '100%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={4}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2019}
                            endYear={2020}
                            schoolName="Nottingham Trent University"
                            schoolDescription="MSc Project Management"
                        />
                        <Education 
                            startYear={2015}
                            endYear={2019}
                            schoolName="Nottingham Trent Univeristy"
                            schoolDescription="BSc (Hons) Software Engineering"
                        />
                        <Education 
                            startYear={2013}
                            endYear={2015}
                            schoolName="NCN Clarendon College"
                            schoolDescription="BTEC Level 3 Ext Software Development"
                        />

                        <hr style={{borderTop: '3px solid #76C5FE'}}/>

                        <h2>Experience</h2>

                        <Experience
                            startYear={"June 2017"}
                            endYear={"May 2018"}
                            jobName="Junior Software Developer"
                            jobDescription="Working as a Software Developer as part of a team at Microlise, working
                            mainly with C# and extensive unit testing among much more... "
                            
                        />
                        <Experience
                            startYear={"September 2016"}
                            endYear={"November 2016"}
                            jobName="Sainsbury's 'Grocery Assistant'"
                            jobDescription="Spend a period of time working for Sainsbury's as a part time job during University."
                            
                        />

                        <hr style={{borderTop: '3px solid #76C5FE'}}/>

                        <h2>Skills</h2>
                        
                        <Skills
                            skill={"C#"}
                            skillSpecificDesc={"I have great experience using C# using many different frameworks, namely, .NET Core, .NET Framework, ASP.NET, ASP.NET MVC, WPF and WinForms." + 
                            " Futhermore, I have practice writing unit tests in a professional work enviroment, while also following TDD principles."}
                        />
                        <Skills
                            skill={"SQL/MySql"}
                            skillSpecificDesc={"I am fluent in working with SQL/MySql both on the front-end and back-end, using SQL Server and" +
                            " mssql (SQL Server Management Server) but also programmatically."}
                        />
                        <Skills
                            skill={"Front-End"}
                            skillSpecificDesc={"I have been working hard on improving my front-end skills, this website attests to that" +
                            " the main focus of this has been developing my JavaScript and ReactJS skills."}
                        />
                        <Skills
                            skill={"Java"}
                            skillSpecificDesc={"I'm also fluent in Java, I feel it goes partially hand in hand with C#, although I acknowledge "+
                            "the major differences between these languages, this fluency also includes building forms and API's."}
                        />
                        <Skills
                            skill={"Principles"}
                            skillSpecificDesc={"I am fluent in using GitHub for version control, skills gathered from working as part of a team "+
                            "in a professional development enviroment. I try and cover as much of my code as possible regarding testing, " +
                            "and stick to SOLID principles when writing code, with the aim of keeping it as neat and understandable as possible."}
                        />


                    </Cell>
                </Grid>

            </div>

        )
    }
}

export default Resume;