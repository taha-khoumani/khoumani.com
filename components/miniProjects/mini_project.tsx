"use client" 
import React from 'react'
import { project_data_type } from "../../lib/types"
import style from '@/styles/mini_projects.module.css'

type Props = {
    projectData: project_data_type
}

export default function Project ({projectData}:Props){

    const style_bg_img ={
        backgroundImage: `url(${projectData.imagery})`,
    }                                  

    function sendToLiveWebsite (e:any){
        window.open(projectData.liveLink,'_blank')
        e.stopPropagation()
    }
    function sendToLiveGithub (e:any){
        window.open(projectData.githubLink,'_blank')
        e.stopPropagation()
    }

    return(
        <div onClick={sendToLiveWebsite}  style={style_bg_img} className={style.abc}>
            <p className={style.p} ><span className={style.code}>&lt;</span> {projectData.title} <span className={style.code}>/&gt;</span></p>
            <div onClick={sendToLiveGithub} id={style.github_link}>
                <div>
                    <i aria-hidden className={`${style.i} fa-brands fa-github`} ></i>
                    GitHub
                </div>
                <hr className={style.hr} />
            </div>
        </div>
    )
}

