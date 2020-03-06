import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Root,
  Header,
  Sidebar,
  CollapseBtn,
  CollapseIcon,
  Content,
  SidebarTrigger,
  SidebarTriggerIcon,
  headerStyles,
} from '@mui-treasury/layout';
import { DefaultTheme, Headers, Recipes } from './data';
import DataTableContainer from './components/DataTable';
import NavContent from './components/NavContent';
import HeaderContent from './components/HeaderContent';
import { Toolbar } from '@material-ui/core';

const config = {
  sidebar: {
    anchor: 'left',
    width: 256,
    variant: 'permanent',
    collapsible: true,
    collapsedWidth: 64,
  },
  content: { persistentBehavior: 'fit' },
  header: {
    position: 'fixed',
    clipped: false,
    persistentBehavior: 'fit',
    offsetHeight: 64,
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    let themeType = window.localStorage.getItem('theme');

    if (themeType === 'undefined') {
      window.localStorage.setItem('theme', 'dark');
    } else if (themeType === 'light') {
      DefaultTheme.palette.type = 'light';
    } else if (themeType === 'dark') {
      DefaultTheme.palette.type = 'dark';
    }

    this.state = {
      theme: DefaultTheme,
      headers: Headers,
      recipes: Recipes,
    };
  }

  toggleDarkTheme = () => {
    let theme = this.state.theme;

    if (theme.palette.type === 'light') {
      window.localStorage.setItem('theme', 'dark');
      theme.palette.type = 'dark';
    } else {
      window.localStorage.setItem('theme', 'light');
      theme.palette.type = 'light';
    }

    this.setState({ theme });
  };

  handleOverclock = (step) => {
    let recipes = this.state.recipes;
    recipes[step].overclock = !recipes[step].overclock;

    this.setState({ recipes });
  };

  handleTier = (step, value) => {
    let recipes = this.state.recipes;
    recipes[step].tier = value;

    this.setState({ recipes });
  };

  render() {
    let muiTheme = createMuiTheme(this.state.theme);
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Root theme={muiTheme} config={config}>
          {({ sidebarStyles }) => (
            <>
              <Header>
                <Toolbar>
                  <SidebarTrigger className={headerStyles.leftTrigger}>
                    <SidebarTriggerIcon />
                  </SidebarTrigger>
                  <HeaderContent />
                </Toolbar>
              </Header>
              <Sidebar>
                <div className={sidebarStyles.container}>
                  <NavContent
                    handleTheme={this.toggleDarkTheme}
                    themeType={this.state.theme.palette.type}
                  />
                </div>
                <CollapseBtn>
                  <CollapseIcon />
                </CollapseBtn>
              </Sidebar>
              <Content>
                <Container maxWidth="xl">
                  <Box my={2}>
                    <DataTableContainer
                      headers={this.state.headers}
                      recipes={this.state.recipes}
                      onChangeOC={this.handleOverclock}
                      onChangeTier={this.handleTier}
                    />
                  </Box>
                </Container>
              </Content>
            </>
          )}
        </Root>
      </MuiThemeProvider>
    );
  }
}

export default App;
