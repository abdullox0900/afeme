import React from "react"
import {Menu, MenuItem, Divider } from '@mui/material';
import Container from "../Container/Container";
import "../Nav/Nav.scss";
// import { Container } from "@mui/system";

function Nav() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Container>
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
                        <a href="#" className="nav__link" onClick={handleClick}>Yana</a>
                    </li>

                    <Menu id="nav__more-menu" MenuListProps={{'aria-labelledby': 'nav__bottom-more',}} anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose} sx={{py: 0.5}}>Something</MenuItem>
                        <Divider sx={{ my: 0.1 }} />
                        <MenuItem onClick={handleClose} sx={{py: 0.5}}>Something 2</MenuItem>
                        <Divider sx={{ my: 0.1 }} />
                        <MenuItem onClick={handleClose} sx={{py: 0.5}}>Something 3</MenuItem>
                    </Menu>
                </ul>
            </nav>
            </Container>
        </>
    )
}

export default Nav;