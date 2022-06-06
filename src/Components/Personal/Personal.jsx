import { Button } from '@mui/material'
import { ReactComponent as Trash } from '../../Assets/Img/Icon/trash.svg'
import { ReactComponent as Edit } from '../../Assets/Img/Icon/edit.svg'
import UserPhoto from '../../Assets/Img/UserPhoto.png'
import React from 'react'
import style from './Personal.module.scss'

function Personal() {
  return (
    <div className={style.card}>
      <img src={UserPhoto} style={{marginBottom:'30px'}} />
      <b>Abdulloh Abdusalomov</b>
      <em>ID:2343224</em>
      <div className={style.InpG}>
        <input type="text" placeholder='Email va Telefon Raqamlar.' />
        <input type="text" placeholder='Parol va Avtorizatsiyalar' />
        <input type="text" placeholder='Qirish va qurilmalar' />
        <input type="text" placeholder='Ijtimoiy tarmoqlar' />
      </div>
      <div style={{ margin: '20px auto' }}>
        <Button style={{ marginRight: '10px', backgroundColor: 'white', border: '1px solid #ff0000', }} variant="contained" className="card__trash">
          <Trash className="trash" />
        </Button>
        <Button style={{ backgroundColor: 'white', border: '1px solid #357AFF' }} color="error" className="card__edit">
          <Edit className="edit" />
        </Button>
      </div>
    </div>
  )
}

export default Personal