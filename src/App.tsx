import "./style/style.scss"
import { useState } from "react";
import Header from "./components/Header"
import HomePage from "./components/HomePage"

function App() {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const handleSideBar = () => {
    setSidebarStatus(!sidebarStatus)
  }
  
  return (
    <>
      <Header 
        onClickHandler={handleSideBar}
      />
      <HomePage 
        openstatus={sidebarStatus}
      />
    </>
  )
}

export default App
