import { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AppRoutes from './assets/routes/AppRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <HomePage/> */}
     <AppRoutes/>

    </>
  )
}



export default App
