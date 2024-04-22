
import { BrowserRouter } from 'react-router-dom'
import { CategoryRoute } from './screens/Router/categoryRoute'
import { SlideNavbar } from './components/slideNabvar/slideNavbar'
import { Navbar } from './components/navbar/navbar'




function App() {


  return (
    <>
        <BrowserRouter>
        
        <Navbar/>
        <SlideNavbar/>
        <CategoryRoute/>

        </BrowserRouter>
    </>
  )
}

export default App
