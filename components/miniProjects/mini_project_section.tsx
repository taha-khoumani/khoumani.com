import React from 'react'
import Project from "./mini_project"
import { projects_data } from '@/lib/data'
import style from '@/styles/mini_projects.module.css'
import { project_data_type } from '@/lib/types'

export default function MiniProjectsSection(){
    const all_projects = projects_data
    const mini_projects = all_projects.filter(project => project.isOneOfTop === false && project)  as project_data_type[]
    let projectsElements = [...mini_projects].reverse().map(project =>{ return <Project key={project.id} projectData={{...project}}/>})
    return(
        <section id={style.project} >
            <div id={style.poop}  className='flex justify-center '>
                <div id={style.act_projects}>
                    {projectsElements}
                </div>
                {/* dds */}
            </div>
        </section>
    )
}