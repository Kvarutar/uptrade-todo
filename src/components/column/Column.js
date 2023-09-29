import Task from "../task/Task";
import {Droppable} from 'react-beautiful-dnd';
import {Draggable} from 'react-beautiful-dnd';
import './column.sass';

export default function Column({tasksData, id, title}){
    // const content = tasksData.map((task, index) => {
    //     const {title, descr, id} = task;
    //     return <Draggable key={id} draggableId={id} index={index}>
    //                 <Task 
    //                     title={title} 
    //                     descr={descr} 
    //                     key={id} 
    //                     id={id} 
    //                     index={index} 
    //                     provided={provided}
    //                     snapshot={snapshot}
    //                 />
    //            </Draggable>
    // })

    return(
        <div className="tasks-column">
            <p>{title}</p>
            <Droppable droppableId={id}>
                {(provided) => {
                    <div
                        {...provided.droppableProps}  
                        ref={provided.innerRef}      
                    >
                        {tasksData.map((task, index) => {
                            const {title, descr, id} = task;
                            return (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided, snapshot) => {
                                        <Task 
                                            title={title} 
                                            descr={descr} 
                                            key={id} 
                                            id={id} 
                                            index={index} 
                                            provided={provided}
                                            snapshot={snapshot}
                                        />
                                    }}
                                </Draggable>
                            )
                        })}
                    </div>
                }}
            </Droppable>
        </div>
    )
}