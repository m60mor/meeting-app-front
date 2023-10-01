import 'bootstrap/dist/css/bootstrap.min.css';
import Views from './Views';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </>
  )
}

export default App
