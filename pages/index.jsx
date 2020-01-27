import Head from 'next/head';
import Button from '@material-ui/core/Button';
import fetch from 'isomorphic-unfetch';
import user from './api/user';

function LandingPage({ user }) {
  return (
    <div style={{ padding: '10px 45px' }}>
      <Head>
        <title>Index page</title>
        <meta name="description" content="This is the description of the Index page" />
      </Head>
      <Button variant="contained">MUI button</Button>
      <p>Content on Index page</p>
      <p>{user}</p>
    </div>
  );
}

LandingPage.getInitialProps = async (ctx) => {
  const baseUrl = ctx.req ? ctx.req.headers.host : '';
  const response = await fetch(`http://${baseUrl}/api/user`);
  const { username } = await response.json();
  return {
    user: username,
  };
};

export default LandingPage;
