import Container from '@mui/material/Container';
import { useEffect } from "react";
import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Promotions from './components/Promotions';

function App() {
  useEffect(() => {
    document.title = 'React MUI';
  });
  return (
    <Container maxWidth="xl" sx={{ minHeight: '100vh' }}>
      <Appbar />
      <Banner />
      <Promotions />
    </Container>
  );
}

export default App;
