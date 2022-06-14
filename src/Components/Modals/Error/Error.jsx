import { Box, Modal } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Tick from '../../Animations/Tick/Tick'
import style from './Error.module.scss'

function Succecc({err, setErr}) {
    const handleClose = () => setErr(false);
    
    return (
        <div>
            <Modal
                open={err}
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