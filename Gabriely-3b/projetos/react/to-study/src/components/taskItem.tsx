import { CheckCircle, Eraser } from "lucide-react";
import style from "./taskItem.module.css"

export function TaskItem() {
    return (
    <div className={style.taskItem}>
        <button>
            <CheckCircle />
        </button>
        <span>Back-end</span>
        <button>
            <Eraser />
        </button>
    </div>
    )
}