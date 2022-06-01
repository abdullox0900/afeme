import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import style from '../Repair/Repair.module.scss'

function Material({material_id, setMaterial}) {
    const [houseMaterial, setHouseMaterial] = useState([])
    useEffect(() => {
        const hAbout = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/materials')
                if (res.data.status) {
                    setHouseMaterial(res.data.data)
                } else {
                    alert('hato')
                }
            } catch (error) {
                console.log(error);
            }
        }
        hAbout()
    }, [])
    return (
        <div>
            <div className={style.repair}>
                <p>Materiallari:</p>
                <div>
                    {houseMaterial.map((type) => (
                        <Button
                            onClick={() => setMaterial(type.id)}
                            className={style.btn}
                            key={type.id}
                            style={{
                                backgroundColor: material_id === type.id ? '#0468ff' : '',
                                color: material_id === type.id ? 'white' : ''
                            }}
                        >
                            {type.name}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Material