// Import => React
import React, { useEffect, useState } from 'react'

// Import => Axios
import axios from 'axios'

// Import => Components
import style from '../HouseAbout/HouseAbout.module.scss'

function Material({material_id, setMaterial}) {
    const [houseMaterial, setHouseMaterial] = useState([])
    useEffect(() => {
        const hAbout = async () => {
            try {
                const res = await axios.get('http://ali98.uz/api/materials')
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
            <div className={style.typeInp}>
                <p>Materiallari:</p>
                <div className={style.InpG}>
                    {houseMaterial.map((type) => (
                        <button
                            onClick={() => setMaterial(type.id)}
                            key={type.id}
                            style={{
                                backgroundColor: material_id === type.id ? '#0468ff' : '',
                                color: material_id === type.id ? 'white' : ''
                            }}
                        >
                            {type.name_uz}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Material