//Import React and RRD
import React from 'react'
import { NavLink } from 'react-router-dom'
//Import MUI
import { Box, Modal } from '@mui/material'
//Import Components
import Tick from '../../Animations/Tick/Tick'
//Import Style
import style from './success.module.scss'

function Succecc({suc, setSuc}) {
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
                    <Tick />
                    <p className={style.title}>Muvaffaqiyatli !!!</p>
                    <NavLink to={"/Afeme"}>
                        <button className={style.button}>
                            Bosh Sahifaga O'tish
                        </button>
                    </NavLink>
                </Box>
            </Modal>
        </div>
    )
}

export default Succecc