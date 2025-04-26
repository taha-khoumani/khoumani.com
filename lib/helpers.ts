export function scrollTo(el:string){
    const projectSection = document.querySelector(`#${el}`)
    if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
    }
}