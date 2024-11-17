import { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AppRoutes from '../src/routes/AppRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <><AppRoutes/></>
  )
}
export default App
