import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import logo from '../styles/assets/logo.svg';
import logo from './imgs/1.jpeg';


const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``;

class Logo extends Component {
    render() {
        const { logoStyles } = this.props;

        return (
            <Wrapper href="">
                <img src={logo}
                className=""
                 style={logoStyles} 
                 alt="Brand Logo" />
            </Wrapper>
        );
    }
}

Logo.propTypes = {
    linkStyles: PropTypes.object,
    logoStyles: PropTypes.object,
};

export default Logo;
