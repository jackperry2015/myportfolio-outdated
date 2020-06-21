import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100$%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Serious&skinColor=Light"
                            alt="avatar-here"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1 style={{fontFamily: 'Anton'}}>Full Stack Software Developer</h1>

                            <hr/>

                            <p style={{fontFamily: 'Oxygen'}}> HTML/CSS | SQL/MySql | JavaScript | React | C# | Java </p>
                            <div className="social-links">
                                {/* Github */}
                                <a href="https://github.com/jackperry2015" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/jack-perry-8491521b0/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Landing;