const Banner = () => {
    const bannerStyle = {
        background: 'url("https://fastly.picsum.photos/id/866/1200/400.jpg?hmac=V0hqejFNTg6y8iVymlNIBWVbLrbAyc4hxrT8jWrcfbE") no-repeat center center',
        backgroundSize: 'cover',
        color:'Black',
        padding: '100px 0',
        textAlign: 'center'
    }


    return(
        <div>
            <div style={bannerStyle}>
            <div className="container">
                <h1 className="display-4">Bem-vindo ao meu site</h1>
                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </div>
        </div>
    )
}


export default Banner;