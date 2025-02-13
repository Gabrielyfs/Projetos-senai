import style from "./App.module.css"
import { Header } from "./components/header"
import { TaskItem } from "./components/taskItem"

function App() {
  return (
    <div className={style.container}>
      <div className={style.paper}>
        <Header />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  )
}

export default App