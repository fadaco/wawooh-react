import React from 'react';

class NotFound extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        };

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        return (
            <div style={styles.mainDiv}>
                <h1>BE RIGHT BACK BY 12PM!</h1>
            </div>
        )
    }
}

const styles = {
    mainDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 20px',
        height: '100%'
    }
};

export default NotFound;
