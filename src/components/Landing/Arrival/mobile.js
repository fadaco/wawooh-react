import React from 'react';
import { NEW_ARRIVAL_PIC_1, NEW_ARRIVAL_PIC_2 } from '../../../config';

import { NavLink } from 'react-router-dom';
const styles = {
    img: {
        width: '100%',
        height: 450,
        objectFit: 'cover',
    },
    parentDiv: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0px 30px',
    }
}

export default () => (
    <div>
        <div>
            <NavLink to="/bespoke">
                <img src={NEW_ARRIVAL_PIC_1} style={styles.img} alt={"arrival-img"} />
            </NavLink>
        </div>
        <br />
        <div>
            <NavLink to="/bespoke">
                <img src={NEW_ARRIVAL_PIC_2} style={styles.img} alt={"arrival-img"} />
            </NavLink>
        </div>
    </div>
)