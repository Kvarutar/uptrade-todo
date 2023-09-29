import {Draggable} from 'react-beautiful-dnd';
import './task.sass';

export default function Task({title, descr, id, index, snapshot, provided}){
    return(
        <div className="tasks-item"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
        >
            <p className="tasks-item__title">{title}</p>
            <div className="tasks-item__descr">{descr}</div>
        </div>
    )
}