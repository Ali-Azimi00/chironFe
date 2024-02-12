import './App.css'
import Hero from './pages/Hero'
import TaskSelect from './pages/TaskSelect'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from './pages/Experience';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">

      <NavBar></NavBar>
      {/* <div className='flex justify-center items-center mx-12'> */}
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Hero />}></Route>
          <Route path="/SelectTasks" element={<TaskSelect />}></Route>
          <Route path="/Exp" element={<Experience />}></Route>

        </Routes>
      </BrowserRouter>
      {/* </div> */}

    </div>

  )
}

export default App;
