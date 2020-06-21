import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <h4>{this.props.skill}</h4>
                </Cell>
                <Cell col={8}>
                    <p>{this.props.skillSpecificDesc}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;