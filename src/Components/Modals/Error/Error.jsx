//Import React and RRD
import React from 'react'
import { NavLink } from 'react-router-dom'

//Import MUI
import { Box, Modal } from '@mui/material'

//Import Components
import Tick from '../../Animations/Tick/Tick';

//Import Style
import style from './Error.module.scss'

function Succecc({err, setErr}) {
    const handleClose = () => setErr(false);//Close Error Modal    
    return (
        <div>
            <Modal
                open={err}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={style.style}>
                    <Tick/>
                    <p className={style.title}>Muvaffaqiyatsiz !!!</p>
                        <button className={style.button} onClick={() => handleClose()}>
                            Ortga Kaytish
                        </button>
                </Box>
            </Modal>
        </div>
    )
}

export default Succecc