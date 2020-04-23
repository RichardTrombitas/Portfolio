import React, { Component } from 'react'
import Project from './Project'

export class Projects extends Component {
    render() {
        return (
            <div className="projects-section" id="projects">
                <Project/>
                <Project/>
                <Project/>
            </div>
        )
    }
}

export default Projects
