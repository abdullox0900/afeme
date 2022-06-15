import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Tick from '../../Animations/Tick/Tick'
import style from './success.module.scss'

function Succecc({suc, setSuc}) {
    const handleClose = () => setSuc(false);
    
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
                        <button className={style.butto}>
                            Bosh Sahifaga O'tish
                        </button>
                    </NavLink>
                </Box>
            </Modal>
        </div>
    )
}

export default Succecc