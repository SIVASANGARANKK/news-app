import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  // const [category,setcategory]  =useState("technology")
  return (
    <div>  
      <NewsBoard/>
    </div>
  )
}

export default App