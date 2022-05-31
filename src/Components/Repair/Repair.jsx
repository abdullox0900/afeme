import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import style from '../Repair/Repair.module.scss'


function Repair({ repair_id, setRepair }) {
    const [houseRepair, setHouseRepair] = useState([])
    useEffect(() => {
        const Rep = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/repairs');
                if (res.data.status) {
                    setHouseRepair(res.data.data)
                } else {
                    alert('hato')
                }
            } catch (error) {
                console.log(error);
            }
        }
        Rep()
    }, [])
    return (
        <div className={style.repair}>
            <p>Tamir holati:</p>
            <div>
                {houseRepair.map((type) => (
                    <Button
                        onClick={() => setRepair(type.id)}
                        className={style.btn}
                        key={type.id}
                        style={{
                            backgroundColor: repair_id === type.id ? '#0468ff' : '',
                            color: repair_id === type.id ? 'white' : ''
                        }}
                    >
                        {type.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Repair