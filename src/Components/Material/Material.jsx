// Import => React
import React, { useEffect, useState, useContext } from 'react'

// Import => Axios
import axios from 'axios'

// Import => Components
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';
import style from '../../Pages/AdventPage/advertPage.module.scss'


function Material({material_id, setMaterial}) {
    const [houseMaterial, setHouseMaterial] = useState([])
    const { lang, setLang } = useContext(Context);

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
                <p>{content[lang].adverd_about_6}</p>
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
        </div>
    )
}

export default Material