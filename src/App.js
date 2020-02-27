import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Topbar from './components/Topbar';
import { DefaultTheme, Headers, Recipes } from './data';
import DataTableContainer from './components/DataTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: DefaultTheme,
      headers: Headers,
      recipes: Recipes,
    };
  }

  toggleDarkTheme = () => {
    let theme = this.state.theme;
    theme.palette.type = theme.palette.type === 'light' ? 'dark' : 'light';
    this.setState(theme);
  };

  render() {
    let muiTheme = createMuiTheme(this.state.theme);
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Topbar
          onToggleDark={this.toggleDarkTheme}
          paletteType={muiTheme.palette.type}
        />
        <Container maxWidth="xl">
          <Box my={4}>
            <DataTableContainer
              headers={this.state.headers}
              recipes={this.state.recipes}
            />
          </Box>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
