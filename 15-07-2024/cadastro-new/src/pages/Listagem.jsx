import { useEffect } from "react"
import { useState } from "react"

export default function Listagem() {
    // UseState do react para gerenciar o estado
    const [news, setNews] = useState([])

    //Hook useEffect para lidar com efeitos colaterais no componente
    useEffect(()=> {
        fetch("http://localhost:7000/news")
        .then((response) => response.json())
        .then((data) => setNews(data))
    }, [])
    console.log(news)

    return (
        <div className="conteiner mt-4">
            {news.map((user) => (
                <>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{user.nome}</h5>
                        <p className="card-text"><strong>Email: </strong>{user.email}</p>
                    </div>
                </div>
                </>
            ))}
        </div>
    )
}