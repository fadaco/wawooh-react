import React from 'react';

const inlineStyle = {
    reducedFont: {
        fontSize: '13px',
        textDecoration: 'none'
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
        width: '30%',
        borderRadius: '3px'
    },
    innerAuth: {
        padding: '1rem 1.5rem'
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
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '0',
        width: '100%',
        height: 'calc(1.8em + 1px)',
        fontSize: '1rem',
        lineHeight: '1.5',
        outline: 'none'
    },
    btn: {
        borderRadius: '0',
        display: 'block',
        width: '100%',
        backgrounPosition: 'center',
        transition: 'background 0.8s',
        padding: '1em 2em',
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
    formInline: {
        display: 'flex'
    },
}

export default (props) => (
    <div style = {inlineStyle.authLogin}>
        <div style = {inlineStyle.innerAuth}>
            <h3 style = {inlineStyle.h3}>Recover your password.</h3>
            <div style = {inlineStyle.formDetails}>
                <form>
                    <div style ={inlineStyle.formGroup}>
                        <label style = {inlineStyle.label}>Enter your registered email</label>
                        <div style = {inlineStyle.formInline}>
                            <input onChange={props.onValueChange} value={props.email} style = {inlineStyle.formControl} type="email" id="reset-email" name="email" placeholder = ""/>
                        </div>
                    </div>
                    
                    <div style ={inlineStyle.formGroup}>
                        {props.children}
                    </div>
                </form>
            </div>
        </div>
    </div>
)