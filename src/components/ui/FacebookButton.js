import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { FACEBOOK_APP_ID } from '../../config';

export default (props) => {
    return (
        <FacebookLogin
            appId={FACEBOOK_APP_ID}
            fields='name,email'
            textButton='Facebook'
            callback={props.callback}
            buttonStyle={
                {
                    fontSize: 14,
                    letterSpacing: 1,
                    textTransform: 'capitalize',
                    fontFamily: 'Brandon',
                    width: '100%',
                    outline: 'none'
                }
            }
            size={props.size}
            containerStyle={
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    marginBottom: 10
                }
            }
        />
    )
}