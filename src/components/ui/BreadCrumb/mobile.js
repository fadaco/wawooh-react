import React, { Component } from 'react'
import Styled from 'styled-components'

class CrumbNav extends Component {
    render() {
        return (
            <BreadNav>
                <div>
                    <div>Home / Men / Clothings / Haze_Kaitian </div>
                </div>
            </BreadNav>
        )
    }
}

export default CrumbNav

const BreadNav = Styled.div`
    padding: 20px;
    background: #f7f7f7;
    font-weight: 400;
`