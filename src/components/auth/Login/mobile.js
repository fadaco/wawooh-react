import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookButton from '../../ui/FacebookButton';
import Button from '../../ui/Button';

export default (props) => {
    const _changeValues = (ev) => {
        props.onChangeInput(ev.target.name, ev.target.value)
    }
    return (
        <div style = {inlineStyle.authLogin}>
            <div style = {inlineStyle.innerAuth}>
                <h3 style = {inlineStyle.h3}>Welcome Back</h3>
                <div style = {inlineStyle.formDetails}>
                    <form>
                        <div style ={inlineStyle.formGroup}>
                            <label style = {inlineStyle.label}>Email Address</label>
                            <div style = {inlineStyle.formInline}> 
                                <input style = {inlineStyle.formControl} type="email" name="email" value = {props.email} onChange = {_changeValues}/>
                            </div>
                        </div>
                        <div style ={inlineStyle.formGroup}>
                            <label style = {inlineStyle.label}>Password</label>
                            <div style = {inlineStyle.formInline}>
                                <input style = {{...inlineStyle.formControl, borderRight:'none'}} type={props.switch} name = "password" value= {props.password} onChange = {_changeValues} />
                                <div style = {inlineStyle.inputGroupAddon}>
                                    <i onClick = {props.toggle} className={props.icon}></i>
                                </div>
                            </div>
                        </div>
                        <div style ={inlineStyle.formGroup}>
                            <div style={{color: 'red', fontSize: 12, magin: '5px 0'}}>{props.error}</div>
                            <Button
                                onClick={props.click}
                                height={'42px'}
                                label='LOGIN'
                                bgColor='black'
                                textColor='#fff'
                                loading={props.loading}
                            />
                        </div>
                        <p className = "orCont" style = {{...inlineStyle.orCont, ...inlineStyle.reducedFont, ...inlineStyle.textCenter}}>Or Continue with</p>
                        <FacebookButton callback={props.onFacebookResponse} size={'medium'} />
                    </form>
                    <div style = {inlineStyle.textCenter}>
                    <NavLink to = "/register" className="" style = {inlineStyle.reducedFont} href="{}">New to Wawooh? &#8594;</NavLink> <br />
                    <div style = {{...inlineStyle.reducedFont, ...inlineStyle.forgotPwd}}>Forgot Password? <a style = {inlineStyle.reducedFont} href="{}"> Click here</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const inlineStyle = {
    reducedFont: {
        fontSize: '13px',
        textDecoration: 'none'
    },
    formInline: {
        display: 'flex'
    },
    h3: {
        paddingTop: '5px',
        color: 'black',
        textAlign: 'center',
        fontSize: '1em',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    textCenter: {
        textAlign: 'center'
    },
    authLogin: {
        margin: '3rem auto',
        background: '#fff',
        width: '90%',
        borderRadius: '3px'
    },
    innerAuth: {
        padding: '1rem'
    },
    label: {
        fontSize: '12px',
        fontWeight: '400',
        color: '#999'
    },
    formDetails: {
        marginTop: '2em'
    },
    formGroup: {
        marginBottom: '1rem'
    },
    formControl: {
        display: 'block',
        padding: '6px 10px',
        background: '#fff',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '0',
        width: '100%',
        outline: '0',
        height: 'calc(2em + 5px)',
        fontSize: '1rem',
        lineHeight: '1.5'
    },
    btn: {
        borderRadius: '0',
        display: 'block',
        width: '100%',
        backgrounPosition: 'center',
        transition: 'background 0.8s',
        padding: '1em 2em',
        outline:'none',
        border: '1px solid rgba(0, 0, 0, 0.2)'
    },
    btnLogin: {
        letterSpacing: '2px',
        fontWeight: 'bold',
        background: '#000',
        color: '#fff',
        fontSize: '13px'
    },
    fbLogin: {
        background: 'var(--facebook-color)',
        color: '#fff',
        textDecoration: 'none'
    },
    orCont: {
        padding: '1px',
    },
    forgotPwd: {
        paddingTop: '.81rem'
    },
    inputGroupAddon: {
        padding: '14px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderLeft: 'none'
    }
}