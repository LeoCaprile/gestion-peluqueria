import { Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import SideBar from "./Components/SideBar"

function App() {

  return (
    <Fragment>
    <SideBar></SideBar>
    <Switch>
      <Route exact path='/'></Route>
    </Switch>
    </Fragment>
    
  )
}

export default App
