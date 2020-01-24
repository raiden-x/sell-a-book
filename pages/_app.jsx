import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';
import Header from '../component/header';
import { theme } from '../lib/theme';

function customApp(props) {
  const { Component, pageProps } = props;
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header {...pageProps} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default customApp;
