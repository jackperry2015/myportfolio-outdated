import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jack Perry</h2>
                        <img
                        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Serious&skinColor=Light"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Hi there, <br /> please feel free to get in touch with me regarding any inquiries and
                            opportunites via the contact methods on the right of the screen. Preferrably by email.

                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" arya-hidden="true"/>
                                        07585770864
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope-square" arya-hidden="true"/>
                                        jackp9706@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin-square" arya-hidden="true"/>
                                        tinyurl.com/ycu2vt5j
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Contact;