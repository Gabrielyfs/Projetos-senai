import { CheckCircle, Eraser } from "lucide-react";
import style from "./taskItem.module.css"

export function TaskItem() {
    return (
    <div className={style.taskItem}>
        <button className={style.checkButton}>
            <CheckCircle />
        </button>
        <span className={style.taskText}>Back-end</span>
        <button className={style.deleteButton}>
            <Eraser />
        </button>
    </div>
    )
}