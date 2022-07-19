import { TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/Content';
import "../../Form/Form.scss";
import Header from '../../../Components/Header/Header';



let url = process.env.REACT_APP_URL;
function Email() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { lang, setLang } = useContext(Context);
    const [show, setShow] = useState(false)
    const [hide, setHide] = useState(false)
    const [main, setMain] = useState(true)

    let forgot = new FormData();

    let requestOptions = {
        method: 'POST',
        body: forgot,
        redirect: 'follow'
    };

    const onSubmit = (data) => {
        forgot.append('email', data.email)

        fetch(`${url}forget`, requestOptions)
            .then(response => response.text())
            .then(function (response) {
                let i = response
                if (i != 'false') {
                    setHide(true)
                    setMain(false)
                } else {
                    setShow(true)
                }
            })
        reset();
    }

    return (
        <>
            <Header />
            <section className='forget'>
                <form onSubmit={handleSubmit(onSubmit)} className='forget__wrap' style={{ display: main ? 'block' : 'none' }}>
                    <h2 className='title'>{content[lang].forgot_title}</h2>
                    <p className='descr'>{content[lang].forgot_descr}</p>
                    <p className='error' style={{ display: show ? 'block' : 'none' }}>{content[lang].forgot_error}</p>
                    <TextField
                        className="form__input form__input-email"
                        id="outlined-basic"
                        label={content[lang].form_select_email}
                        variant="outlined"
                        fullWidth
                        {...register('email', {
                            required: `${content[lang].forgot_email_req}`,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: `${content[lang].forgot_email_err}`
                            }
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                    />
                    <button
                        className="button"
                        type="submit"
                        variant="contained"
                    >
                        {content[lang].submit}
                    </button>
                </form>
                <div className="forget__wrap" style={{ display: hide ? 'block' : 'none' }}>
                    <h1 className='title'>{content[lang].forgot_title_suc}</h1>
                    <p>{content[lang].forgot_descr_suc}</p>
                </div>
            </section>
        </>
    )
}

export default Email