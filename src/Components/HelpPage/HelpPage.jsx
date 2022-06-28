import React, { useRef, useState, useContext } from 'react'
import help from './HelpPage.module.scss'
import HELP from '../../Assets/Img/help.svg'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import Container from '../Container/Container';
import SuccessTıck from '../Modals/SuccessTıck/SuccessTıck';
import { useNavigate } from 'react-router-dom';

// Import useContext => Localization
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';


function HelpPage() {
    const { lang, setLang } = useContext(Context);
    const Navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const form = useRef()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        emailjs.sendForm('afeme.corp.help', 'afeme.corp.template', form.current, 'uWgLbWZbgdBumWoRW')
            .then((result) => {
                console.log(result);
                handleOpen();
                reset()
                Navigate('/Afeme')
            })
    }

    return (
        <Container>
            <SuccessTıck open={open} setOpen={setOpen} />
            <section className={help.helppage}>
                <div className={help.title}>
                    <h1>{content[lang].title}</h1>
                    <p>{content[lang].title_descr}</p>
                </div>
                <article className={help.form}>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            className={help.input}
                            id="outlined-basic"
                            label={content[lang].name}
                            variant="outlined"
                            {...register('name', { required: `${content[lang].name_error}` })}
                            error={!!errors?.name}
                            helperText={errors?.name ? errors.name.message : null}
                        />
                        <TextField
                            className={help.input}
                            type='number'
                            id="outlined-basic"
                            label={content[lang].number}
                            variant="outlined"
                            {...register('number', { required: `${content[lang].name_error}` })}
                            error={!!errors?.number}
                            helperText={errors?.number ? errors.number.message : null}
                        />
                        <TextField
                            className={help.input}
                            id="outlined-basic"
                            label={content[lang].email}
                            variant="outlined"
                            {...register('email', {
                                required: false,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: `${content[lang].email_error}`
                                }
                            })}
                            error={!!errors?.email}
                            helperText={errors?.email ? errors.email.message : null}
                        />
                        <FormControl className={help.select}>
                            <InputLabel id="demo-simple-select-label">
                                {content[lang].message_type}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label={'Savol Turi'}
                                {...register('type')}
                            >
                                <MenuItem value={'taqlif'}>{content[lang].type_taklif}</MenuItem>
                                <MenuItem value={'shiqoyat'}>{content[lang].type_shiqoyat}</MenuItem>
                            </Select>
                        </FormControl>
                        <textarea
                            className={help.area}
                            placeholder={content[lang].descr}
                            {...register('descr')}
                        />
                        <button className={help.btn} type='submit'>
                            {content[lang].btn}
                        </button>
                    </form>
                </article>
                <article className={help.illustration}>
                    <img src={HELP} alt="help" />
                </article>
            </section>
        </Container>
    )
}

export default HelpPage