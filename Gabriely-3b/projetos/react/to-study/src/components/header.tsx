import { PencilLine } from "lucide-react"
import style from "./header.module.css"
export function Header() {
    return (
        <header className={style.header}>
          <h1 className={style.title}>To-Study</h1>
          <div className={style.marginLine}></div>
          <div className={style.inputWrapper}>
            <input type="text" className={style.input} placeholder="Adicione uma nova tarefa..." />
            <button className={style.addButton}>
              <PencilLine />
            </button>
          </div>
        </header>
    )
}