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
import { GenerateGraph } from './components/utils/graph';
import DataTable from './components/DataTable';
import NavContent from './components/NavContent';
import HeaderContent from './components/HeaderContent';

import { AddOverclock } from './components/utils/overclock';

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
    let storedRecipes = JSON.parse(window.localStorage.getItem('recipes'));

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

    if (storedRecipes === null) {
      window.localStorage.setItem('recipes', '[]');
      storedRecipes = [];
    }

    let recipes = AddOverclock(storedRecipes.slice(0, storedRecipes.length));
    let graph = GenerateGraph(recipes);

    this.state = {
      theme: DefaultTheme,
      headers: Headers,
      recipes: recipes,
      collapsed: collapsed === 'true',
      graph: graph,
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

  handleCollapse = (collapsed) => {
    window.localStorage.setItem('collapsed', !collapsed);
    this.setState({ collapsed: !collapsed });
  };

  handleClear = () => {
    let recipes = this.state.recipes;
    recipes.length = 0;

    this.setState({ recipes });
    window.localStorage.setItem('recipes', JSON.stringify(recipes));
  };

  handleUpdate = (newRecipes) => {
    let recipes = newRecipes;
    let graph = GenerateGraph(recipes);
    this.setState({ recipes });
    this.setState({ graph });
    window.localStorage.setItem('recipes', JSON.stringify(recipes));
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
                    graph={this.state.graph}
                    handleTheme={this.toggleDarkTheme}
                    handleClear={this.handleClear}
                    recipes={this.state.recipes}
                    handleUpdate={this.handleUpdate}
                    themeType={this.state.theme.palette.type}
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
                      handleUpdate={this.handleUpdate}
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
