import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import './Links.css';


const HomeWrapper = styled.div``;

const Collapse = styled.div.attrs({
  // className: 'collapse navbar-collapse',
})`
  @media screen and (max-width: 420px) {
    display: flex;
    flex-grow: 1;
  }
`;

const List = styled.div.attrs({
  className: 'navbar-nav mr-auto',
})`
  @media screen and (max-width: 420px) {
    flex-direction: row;
    justify-content: space-between;
    /* justify-content: flex-start; */
    width: 100%;
  }
`;

const Item = styled.div.attrs({
  // className: 'collapse navbar-collapse',
})`
  @media screen and (max-width: 420px) {
    /* margin-right: 2em; */
  }
`;

const homeStyles = {
  marginLeft: `1em`,
};

const brandStyles = {
  marginRight: '10rem',
};

const logoStyles = {
  height: '40px',
  width: '40px',
  paddingBottom: '.3rem',
};
let isLoggedIn = localStorage.getItem('loginStatus');
let isStudent = localStorage.getItem('studentStatus');

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: localStorage.getItem('loginStatus'),
      isStudent: localStorage.getItem('studentStatus')
   };
  }
  componentWillMount() {
    isLoggedIn === null
      ? this.setState({ isLoggedIn: true })
      : this.setState({ isLoggedIn: false });
    isStudent === null
      ? this.setState({ isStudent: true })
      : this.setState({ isStudent: false });
  }

  render() {
    return (
      <React.Fragment>
        <HomeWrapper>
          
          <Link to="/" className="navbar-brand navbar-brand1" style={brandStyles}>
            Uber <span>Eats</span> 
          </Link>
        </HomeWrapper>
        <Collapse>
          <List>
            {/* <Item>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Item> */},
            {isLoggedIn && (
            <Item>
              <Link to="/items" className="nav-link navbar-brand2">
                Home
              </Link>
            </Item>
            )}
            
            {!isLoggedIn ? (
              <Item>
                <Link to="/login" className="nav-link navbar-brand2">
                  Login
                </Link>
              </Item>
            ) : (
              <Item>
                <Link to="/logout" className="nav-link navbar-brand2">
                  Logout
                </Link>
              </Item>
            )}
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Links;
