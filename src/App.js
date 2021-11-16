import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Appoinment',
    day: 'feb 4th at 2 pm',
    reminder: true,
    },
    {
        id: 2,
        text: 'Meeting',
        day: 'feb 6th at 1pm',
        reminder: true,
        },
        {
            id: 3,
            text: 'shopping',
            day: 'feb 7th at 6pm',
            reminder: false,
            },
    ])

  // Delete task
  const deleteTask = (id) =>{
   // console.log('delete', id)
 setTasks(tasks.filter((task) => task.id !== id))
}
  
//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
  task.id === id ?{ ...task, reminder:! task.reminder}: task
  )
  )
}
    
return (
   <div className='container'>
      <Header/>
     {tasks.length> 0? (
      <Tasks tasks={tasks} onDelete= {deleteTask} onToggle={toggleReminder} />
     ) : (
       'No Tasks to show'
     )}
   </div>
  )
}


export default App
