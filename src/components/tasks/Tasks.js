import Column from "../column/Column";
import {DragDropContext} from 'react-beautiful-dnd';
import {useState} from 'react';
import './tasks.sass';

export default function Tasks(){
    const [tasksData, setTasks] = useState([{
        id: 1,
        title: "Task1",
        descr: "asdasdasd"
    },{
        id: 2,
        title: "Task2",
        descr: "asdasdasd"
    },{
        id: 3,
        title: "Task3",
        descr: "asdasdasd"
    }])

    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        const newTasks = [...tasksData];
        const [removed] = newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, removed);
        setTasks(newTasks)
    }
    

    return(
        <div className="tasks">
            <DragDropContext 
                onDragEnd={onDragEnd}
            >
                <Column tasksData={tasksData} id={"1"} title={"inProgress"}/>
            </DragDropContext>
        </div>
    )
}