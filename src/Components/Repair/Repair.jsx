// Import => React
import React, { useEffect, useState } from 'react';

// Import => Axios
import axios from 'axios';

// Import => Components
import style from '../HouseAbout/HouseAbout.module.scss';


function Repair({ repair_id, setRepair }) {
    const [houseRepair, setHouseRepair] = useState([])
    useEffect(() => {
        const Rep = async () => {
            try {
                const res = await axios.get('http://ali98.uz/api/repairs');
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
        <div className={style.typeInp}>
            <p>Tamir holati:</p>
            <div className={style.InpG}>
                {houseRepair.map((type) => (
                    <button
                        onClick={() => setRepair(type.id)}
                        key={type.id}
                        style={{
                            backgroundColor: repair_id === type.id ? '#0468ff' : '',
                            color: repair_id === type.id ? 'white' : ''
                        }}
                    >
                        {type.name_uz}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Repair