import Container from '@mui/material/Container';
import { useEffect } from "react";
import Appbar from './components/Appbar';
import Banner from './components/Banner';

function App() {
  useEffect(() => {
    document.title = 'React MUI';
  });
  return (
    <Container maxWidth="xl" sx={{ minHeight: '100vh' }}>
      <Appbar/>
      <Banner/>
    </Container>
  );
}

export default App;
