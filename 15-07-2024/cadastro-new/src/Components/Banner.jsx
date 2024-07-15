export default function Banner({titulo, subtitulo}) {
    return (
        <div className="jumbotron mt-4 container">
            <h1 className="display-4">{titulo}</h1>
            <p className="lead">{subtitulo}</p>
            <hr className="my-4"/>
        </div>
    )
}