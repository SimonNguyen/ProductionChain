import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
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
import { DefaultTheme, Recipes } from './data';
import DataTable from './components/DataTable';
import NavContent from './components/NavContent';
import HeaderContent from './components/HeaderContent';

let config = {
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
    let collapsed = window.localStorage.getItem('collapsed');

    if (themeType === null) {
      window.localStorage.setItem('theme', 'dark');
    } else if (themeType === 'light') {
      DefaultTheme.palette.type = 'light';
    } else if (themeType === 'dark') {
      DefaultTheme.palette.type = 'dark';
    }

    if (collapsed === null) {
      window.localStorage.setItem('collapsed', 'false');
    }

    this.state = {
      theme: DefaultTheme,
      headers: Headers,
      recipes: Recipes,
      collapsed: collapsed === 'true',
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

  handleClear = (clear) => {
    if (clear === 'clear') {
      let recipes = this.state.recipes;
      recipes.length = 0;

      this.setState({ recipes });
      console.log(this.state.recipes);
    }
  };

  handleCollapse = (collapsed) => {
    window.localStorage.setItem('collapsed', !collapsed);
    this.setState({ collapsed: !collapsed });
  };

  render() {
    let muiTheme = createMuiTheme(this.state.theme);
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Root
          theme={muiTheme}
          config={config}
          initialCollapsed={this.state.collapsed}>
          {({ sidebarStyles, collapsed }) => (
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
                    handleClear={this.handleClear}
                  />
                </div>
                <CollapseBtn onClick={() => this.handleCollapse(collapsed)}>
                  <CollapseIcon />
                </CollapseBtn>
              </Sidebar>
              <Content>
                <Container maxWidth="xl">
                  <Box my={2}>
                    <DataTable
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
