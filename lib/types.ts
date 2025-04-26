export type project_data_type = {
    id:number,
    isOneOfTop:boolean,
    title:string,
    liveLink:string,
    githubLink:string,
    imagery:string
}

export type top_project_data_type = {
    id:number,
    isOneOfTop:boolean,
    title:string,
    nature:'website'|'plugin',
    accessibility:'private'|'public',
    liveLink:string,
    githubLink:string,
    imagery: {
        mobile:string,
        tablet:string,
        laptop:string,
    },

    description:string,
    techStack:string[],
    backgroundColor:string,
    button_backgroundColor:string,
    button_textColor:string,
    toggleColor:string,
}

/*
export type top_project_data_type = basic_project_data_type & additional_project_data

export type basic_project_data_type = {
    id:number,
    title:string,
    liveLink:string,
    githubLink:string,
    imagery: {
        mobile:string,
        tablet:string,
        laptop:string,
    } | string
}

export type additional_project_data = {
    description?:string,
    techStack?:string[],
    backgroundColor?:string,
    frontgroundColor?:string,
}
*/