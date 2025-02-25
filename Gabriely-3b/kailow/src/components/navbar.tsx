import style from "./navbar.module.css"

export function Nav() {
    return (
        <><nav>
                <div className={style.navContainer}>
                    <div className={style.logo}>
                        <img src="../public/logo.png" alt="Logo" />
                        <h1 id="kailow-nav-nome">Kailow</h1>
                    </div>
                    <div className={style.navCategorias}>
                        <a href="#">Home</a>
                        <a href="#">sobre</a>
                        <a href="#">sobre</a>
                        <a href="#">lorem</a>
                    </div>
                    <div className={style.pesquisa}>

                        <input type="text"
                            placeholder="pesquisar..."
                        />
                        <button>🔍</button>
                    </div>
                    <div className={style.fotoUsuario}>
                        <img src="../public/circle-user-round.png" />
                    </div>
                </div>

            </nav></>

    )
}