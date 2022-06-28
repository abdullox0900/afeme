import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import style from './SuccessTıck.module.scss'
import Tick  from "../../Animations/Tick/Tick";

function SuccessTıck({ open, setOpen }) {
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={style.modal}>
                    <Tick />
                </Box>
            </Modal>
        </div>
    )
}

export default SuccessTıck