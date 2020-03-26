import React from 'react';
import { Dialog, DialogContent, Slide } from '@material-ui/core';

const Transition = (props) => {
    return <Slide direction="down" {...props} />;
}

export default (props) => (
    <Dialog
        open={props.open}
        disableBackdropClick={props.disableBackdropClick}
        onClose={props.onClose}
        TransitionComponent={Transition}
        transitionDuration={500}
        maxWidth={props.maxWidth}
        fullWidth
        classes={{root: props.rootClass}}
    >
        <DialogContent>
            <div style={styles.titleDiv}>
                <div style={{fontSize: 25, fontWeight: '400'}}>{props.title}</div>
                <div
                    style={styles.closeButton}
                    onClick={props.onClose}
                >
                    <i className="fas fa-times"></i>
                </div>
            </div>

            <div>{props.children}</div>
        </DialogContent>
    </Dialog>
)

const styles = {
    titleDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 30,
        alignItems: 'center',
    },
    closeButton: {
        color: 'rgba(0,0,0,.4)',
        cursor: 'pointer',
        fontSize: 20,
    }
}