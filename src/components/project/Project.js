import {Link} from 'react-router-dom';
import './project.sass';

function Project(){

    return(
        <Link to={"/project/pet-project"} className="projects-item">
            <p className="projects-item__title">Pet-project</p>
            <p className="projects-item__descr">Pet-project for uptrade task. Will help me to get the job apportunity</p>
            <p className="projects-item__date">28.09.2023</p>
            <p className="projects-item__count">3 задачи</p>
        </Link>
    )
}

export default Project;