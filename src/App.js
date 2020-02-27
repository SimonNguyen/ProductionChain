import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Topbar from './Components/Topbar';
import defaultTheme from './theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: defaultTheme,
    }
  };

  toggleDarkTheme = () => {
    let theme = this.state.theme;
    theme.palette.type = theme.palette.type === 'light' ? 'dark' : 'light';
    this.setState(theme);
  };

  render() {
    let muiTheme = createMuiTheme(this.state.theme);
    return (
      <MuiThemeProvider theme={muiTheme} >
        <CssBaseline />
        <Topbar onToggleDark={this.toggleDarkTheme} paletteType={muiTheme.palette.type} />
        <Container maxWidth='xl'>
          <Box my={2}>
            {[...new Array(200)]
              .map(
                () => `The quick brown fox jumps over the lazy dog.`,
              )
              .join('\n')}
          </Box>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App