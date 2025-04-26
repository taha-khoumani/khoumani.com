import React from 'react'
import Project from './Project'
import {projects_data} from "@/lib/data"
import { top_project_data_type } from '@/lib/types'

type Props = {}

export default function Showcase({}: Props) {
  const all_projects = projects_data
  const top_projects  = all_projects.filter(project => project.isOneOfTop === true && project)  as top_project_data_type[]
  const Projects = top_projects.reverse().map(
    project=> <Project project_data={project} key={project.id} /> 
  )

  return (
    <div id='websites'>
        <div className='general-margins text-center '>
            <h2 className='headings'>Portfolio Showcase</h2>
            <p className='sub-headings'>Check Out These Impressive Websites I've Built!</p>
        </div>
        <div>
            {Projects}
        </div>
    </div>
  )
}