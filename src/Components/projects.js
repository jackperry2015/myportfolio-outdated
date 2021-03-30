import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    
    toggleCategories()
    {
        if(this.state.activeTab === 0){
            return(
                /*  */
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/crGyqja.png) center / cover'}}>
                        My Portfolioooooo</CardTitle>
                    <CardText>
                    My current, regularly updated portfolio.
                    </CardText>
                    <CardActions border>
                    <Button colored><a href="https://github.com/jackperry2015/myportfolio" target="_blank"/>GitHub</Button>
                    <Button colored>Live-Demo Currently Unavailable</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>
                {/*Project 2*/}
                <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}}>
                        Filler 2</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Live-Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else {
            return (
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}}>
                        Filler 3</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Live-Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/*Project 2*/}
                <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}}>
                        Filler 4</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Live-Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }
    
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{color: '#3945D2', fontSize: '20px', fontFamily: 'Oxygen', fontWeight: 'bold'}}>Front End Skills</Tab>
                    <Tab style={{color: '#3945D2', fontSize: '20px', fontFamily: 'Oxygen', fontWeight: 'bold'}}>Back End Skills</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                        {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>    
            </div>

        )
    }
}

export default Projects;