import React, { Component } from 'react'
import Navbar from './components/NavBar.js';
import styled from 'styled-components';

import GlobalStyle from  './styles/GlobalStyles.js';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <AppWrapper>
          <Navbar 
            navbarState={this.state.navbarOpen} 
            handleNavbar={this.handleNavbar}
            />
          <GlobalStyle />
        </AppWrapper>
      </>
    )
  }
}

export default App;

const AppWrapper = styled.div`
height: 100%;
`;
