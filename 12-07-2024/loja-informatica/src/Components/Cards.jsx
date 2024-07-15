const Cards = () => {
    const cardData = [
        {
            title: 'titulo 1',
            subTitulo: 'subtítulo 1',
            text: 'Este é o texto do primeiro card',
            img: "https://placehold.co/300x200/png"
        },
        {
            title: 'titulo 2',
            subTitulo: 'subtítulo 2',
            text: 'Este é o texto do segundo card',
            img: "https://placehold.co/300x200/png"
        },
        {
            title: 'titulo 3',
            subTitulo: 'subtítulo 3',
            text: 'Este é o texto do terceiro card',
            img: "https://placehold.co/300x200/png"
        }
    ];

    console.log(cardData)


    return (
        <div className="row">
            {cardData.map((card, index) => (
                    <section key={index} className="col-md-4">
                        <article className="card">
                            <div className="card-body">
                                <img src={card.img} alt={card.title} className="card-img-top"/>
                                <h5 className="card-title pt-3 pb-3">{card.title}</h5>
                                <h6 className="card-title mb-2 text-muted">{card.subTitulo}</h6>
                                <p className="card-subtitle">{card.text}</p>
                            </div>
                        </article>
                    </section>
            ))}

        </div>
    )
}

export default Cards;