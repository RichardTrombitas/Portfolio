import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import {Grid} from '@material-ui/core'

export class Projects extends Component {
    render() {
        return (
            <div className="projects-section" id="projects">
                <Grid container>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </Grid>
            </div>   
        )
    }
}

export default Projects
