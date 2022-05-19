import "../Nav/Nav.scss";

function Nav() {
    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link">Sotuv</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Ijara</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Yangi inshoatlar</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Kvartirani baholash</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Yana</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;