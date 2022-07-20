import { TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/Content';
import "../../Form/Form.scss";
import Header from '../../../Components/Header/Header';
let url = process.env.REACT_APP_URL;

function NewPassword() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { lang, setLang } = useContext(Context);
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
        forgot.append('password', data.password)

        fetch(`${url}reset`, requestOptions)
            .then(response => response.text())
            .then(function (response) {
                let i = response
                if (i != 'false') {
                    setHide(true)
                    setMain(false)
                } else {
                    console.log(response);
                }
            })
        reset();
    }

    return (
        <>
            <Header />
            <section className='forget' style={{ display: main ? 'block' : 'none' }}>
                <form onSubmit={handleSubmit(onSubmit)} className='forget__wrap'>
                    <h2 className='title'>{content[lang].reset_pass}</h2>
                    <p className='descr'>{content[lang].reset_pass_descr}</p>
                    <TextField
                        className="form__input form__input-email"
                        id="outlined-basic"
                        label={content[lang].form_select_email}
                        variant="outlined"
                        fullWidth
                        {...register('email', {
                            required: `${content[lang].form_select_email_req}`,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: `${content[lang].form_select_email_err}`
                            }
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                    />
                    <TextField
                        fullWidth
                        className="form__input form__input-email"
                        id="outlined-basic"
                        variant="outlined"
                        label={content[lang].form_select_pass}
                        type={'password'}
                        {...register('password', {
                            required: `${content[lang].form_select_pass_req}`,
                        })}
                        error={!!errors?.password}
                        helperText={errors?.password ? errors.password.message : null}
                    />
                    <TextField
                        fullWidth
                        className="form__input form__input-email"
                        id="outlined-basic"
                        variant="outlined"
                        label={content[lang].form_select_code}
                        type='text'
                        {...register('code', {
                            required: `${content[lang].form_select_code_req}`,
                        })}
                        error={!!errors?.code}
                        helperText={errors?.code ? errors.code.message : null}
                    />
                    <button
                        className="button"
                        type="submit"
                        variant="contained">
                        {content[lang].submit}
                    </button>
                </form>
            </section>
            <section className='forget' style={{ display: hide ? 'block' : 'none' }}>
                <div className="forget__wrap" style={{ display: hide ? 'block' : 'none' }}>
                    <h1 className='title'>{content[lang].forgot_title_suc}</h1>
                    <p>{content[lang].forgot_reset_descr}</p>
                </div>
            </section>
        </>
    )
}

export default NewPassword