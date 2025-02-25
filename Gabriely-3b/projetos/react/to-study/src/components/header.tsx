import { PencilLine } from "lucide-react"
import style from "./header.module.css"

type HeaderProps = {
  handleTaskNewText: (text: string) => void
  addTask: () => void
}

export function Header({handleTaskNewText, addTask} : HeaderProps) {
    return (
        <header className={style.header}>
          <h1 className={style.title}>To-Study</h1>
          <div className={style.marginLine}></div>
          <div className={style.inputWrapper}>
            <input onChange={(e) => handleTaskNewText(e.target.value)} type="text" className={style.input} placeholder="Adicione uma nova tarefa..." />
            <button className={style.addButton} onClick={addTask}>
              <PencilLine />
            </button>
          </div>
        </header>
    )
}