import React from 'react';
import styled from 'styled-components';
import SearchIcon from "../../assets/svg/search2.svg";

export default (props) => {
    const Hide = props.hide
    return (
        <SearchHolder style={{display:(Hide ? 'block':'none')}}>
            <form action="" onSubmit={props.handleSubmit}>
                <div className="searchHolder">
                    <input type="text" placeholder="Enter a search keyword" name="query" onChange={props.change} className="formStyle"/>
                    <div className="iconHolder">
                        <button type="search" className="btn-search"><img src={SearchIcon} alt=""/></button>
                    </div>
                </div>
            </form>
        </SearchHolder>
    )
}

const SearchHolder = styled.div`
    width: 98%;
    margin: 2px auto;
    padding: 0px 0 5px;
    .searchHolder {
        display:flex;
    }
    .formStyle {
        width: 100%;
        height: calc(2.5em + 5px);
        background: #fff;
        outline: none;
        border: none;
        padding: 4px 10px;
        font-size: 1em;
        border-radius: 2px;
    }
    .iconHolder {
        padding: 12px;
        background: var(--primary-color);
        display:flex;
    }
    .btn-search {
        background: transparent;
        border:none;
    }
`;