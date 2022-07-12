//Import React and RRD
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
//Import MUI
import { Box, Modal } from '@mui/material'
//Import Components
import SuccessIL from '../../../Assets/Img/successIL.svg'
//Import Style
import style from './success.module.scss'
// Import useContext => Localization
import { Context } from "../../../Context/LangContext";
import content from "../../../Localization/Content";


function Succecc({ suc, setSuc }) {
    const { lang, setLang } = useContext(Context);
    const handleClose = () => setSuc(false);//Close Success Modal
    return (
        <div>
            <Modal
                open={suc}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={style.style}>
                    <img src={SuccessIL} alt="alt" style={{ width: '165px', height: '200px' }} />
                    <p className={style.title}>{content[lang].succ}</p>
                    <NavLink to={"/Afeme"}>
                        <button className={style.button}>
                            {content[lang].sMenu}
                        </button>
                    </NavLink>
                </Box>
            </Modal>
        </div>
    )
}

export default Succecc