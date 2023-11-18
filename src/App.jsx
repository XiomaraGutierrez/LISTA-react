import Header from "./components/Header"
import Task from "./components/Task"
// import {TaskList} from "./components/TaskList"
import "./App.css"

fetch("http://localhost:5000/tasks", {
    method: "Get",
    headers:{
        "Content-Type": "application/json",
    }
})


function App(){
    
    return <div className="app">
        <Header/>
        {/* <TaskList/> */}
        <Task/>
    </div>
}
export default App
