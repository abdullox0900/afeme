// Import => React
import React, { useEffect, useState, useContext } from 'react';

// Import => Axios
import axios from 'axios';

// Import => Components
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';
import style from '../../Pages/AdventPage/advertPage.module.scss'



function Repair({ repair_id, setRepair }) {

    const [houseRepair, setHouseRepair] = useState([])
    const { lang, setLang } = useContext(Context);

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
            <p>{content[lang].adverd_about_5}</p>
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

                        {
                            lang == "uz"
                                ? type.name_uz
                                : lang == "ru"
                                    ? type.name_ru
                                    : type.name_en
                        }

                    </button>
                ))}
            </div>
        </div>
    )
}

export default Repair