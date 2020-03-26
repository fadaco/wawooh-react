import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
    const _changeValues = (ev) => {
        props.onChangeInput(ev.target.name, ev.target.value)
    }
    return (
        <div style = {inlineStyle.authLogin}>
            <div style = {inlineStyle.innerAuth}>
                <h3 style = {inlineStyle.h3}>We glad to have you! <br /> Kindly create your account </h3>
                <div style = {inlineStyle.formDetails}>
                    <form>
                        <div style ={inlineStyle.formGroup}>
                        <label style = {inlineStyle.label}>Last Name</label>
                            <div style = {inlineStyle.formInline}>
                                <input style = {inlineStyle.formControl} name= "lastName" type="text" value ={props.lastname} onChange = {_changeValues} placeholder = ""/>
                            </div>
                        </div>
                        <div style ={inlineStyle.formGroup}>
                            <label style = {inlineStyle.label}>First Name</label>
                            <div style = {inlineStyle.formInline}>
                                <input style = {inlineStyle.formControl} name = "firstName" type="text" value = {props.firstname} onChange = {_changeValues} placeholder = ""/>
                            </div>
                        </div>
                        <div style ={inlineStyle.formGroup}>
                        <label style = {inlineStyle.label}>Email Address</label>
                        <div style = {inlineStyle.formInline}>
                            <input style = {inlineStyle.formControl} name = "email" type="email" value = {props.email} onChange = {_changeValues}/>
                        </div>
                        
                    </div>
                    <div style ={inlineStyle.formGroup}>
                        <label style = {inlineStyle.label}>Password</label>
                        <div style = {inlineStyle.formInline}>
                            <input style = {{...inlineStyle.formControl, borderRight:'none'}} name="password" type={props.switch} value = {props.password} onChange = {_changeValues}/>
                            <div style = {inlineStyle.inputGroupAddon}>
                                <i onClick = {props.toggle} className={props.icon}></i>
                            </div>
                        </div>
                    </div>
                        <div style ={inlineStyle.formGroup}>
                            <label style = {inlineStyle.label}>Confirm Password</label>
                            <div style = {inlineStyle.formInline}>
                                <input style = {{...inlineStyle.formControl, borderRight:'none'}} name="confirmPassword" type={props.switch} value = {props.confirmPassword} onChange = {_changeValues} />
                                <div style = {inlineStyle.inputGroupAddon}>
                                    <i onClick = {props.toggleConf} className={props.icon}></i>
                                </div>
                            </div>
                        </div>
                        <div style = {inlineStyle.textCenter}>
                        <div style = {{...inlineStyle.reducedFont, ...inlineStyle.forgotPwd}}>By clicking on signup, you agree to our <NavLink to="/terms" style = {inlineStyle.reducedFont}> Privacy Policy </NavLink>and <NavLink to="/terms" style={inlineStyle.reducedFont}>Terms and Conditions</NavLink></div>
                    </div>
                    <div style ={{...inlineStyle.formGroup, marginTop:'10px'}}>
                        {props.children}
                    </div>
                    <div style = {inlineStyle.textCenter}>
                        <NavLink to = "/login" style = {inlineStyle.reducedFont} href="{}">Already registered? Login&#8594;</NavLink>
                    </div>
                    </form>
                    
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
        margin: '2rem auto',
        background: '#fff',
        width: '90%',
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
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '0',
        width: '100%',
        outline: '0',
        height: 'calc(1.85em + 5px)',
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
    },
    inputGroupAddon: {
        padding: '12px',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderLeft: 'none'
    }
}