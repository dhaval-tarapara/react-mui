import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = 'My App';
  });
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant='h2' color='primary'>
        Hello World!
      </Typography>
    </Container>
  );
}

export default App;
