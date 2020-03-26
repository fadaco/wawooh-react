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
        padding: '1rem 2rem 1rem'
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
    }
}

export default () => (
    <div style = {inlineStyle.authLogin}>
        <div style = {inlineStyle.innerAuth}>
            <h3 style = {inlineStyle.h3}>Reset your password.</h3>
            <div style = {inlineStyle.formDetails}>
                <form>
                    <div style ={inlineStyle.formGroup}>
                        <label style = {inlineStyle.label}>New Password</label>
                        <div className="input-group">
                            <input style = {inlineStyle.formControl} type="password" placeholder = ""/>
                            <div className="input-group-addon">
                                <i toggle="#login-pwd" className="fa fa-eye pwd-show"></i>
                            </div>
                        </div>
                    </div>
                    <div style ={inlineStyle.formGroup}>
                        <label style = {inlineStyle.label}>Confirm Password</label>
                        <div className="input-group">
                            <input style = {inlineStyle.formControl} type="password" placeholder = ""/>
                            <div className="input-group-addon">
                                <i toggle="#login-pwd" className="fa fa-eye pwd-show"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div style ={inlineStyle.formGroup}>
                        <input style = {{...inlineStyle.btn, ...inlineStyle.btnLogin}} type="button" value="Reset Password" id="reset"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
)