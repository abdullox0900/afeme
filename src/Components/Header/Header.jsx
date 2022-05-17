import logo from "../../Assets/Img/logo.svg"
import Container from "../Container/Container";

function Header() {
    return (
        <>
            <Container>
                <header className="header">
                    <a href="#" className="header__logo-link">
                        <img className="header__logo-img" src={logo} alt="logo" />
                    </a>

                    <div className="header__location">
                        Uzbeciston
                    </div>
                </header>
            </Container>
        </>
    )
}

export default Header;