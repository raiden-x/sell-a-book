import Head from 'next/head';
import Button from '@material-ui/core/Button';

function LandingPage() {
  return (
    <div style={{ padding: '10px 45px' }}>
      <Head>
        <title>Index page</title>
        <meta name="description" content="This is the description of the Index page" />
      </Head>
      <Button variant="contained">MUI button</Button>
      <p>Content on Index page</p>
    </div>
  );
}

export default LandingPage;
