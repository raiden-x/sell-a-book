import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';
import App from 'next/app';
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

/* customApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}; */

export default customApp;
