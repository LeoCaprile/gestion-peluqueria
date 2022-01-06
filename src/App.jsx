import { Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import SideBar from "./Components/SideBar"
import Dashboard from "./Pages/Dashboard"
function App() {

  return (
    <Fragment>
    <SideBar></SideBar>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard}></Route>
    </Switch>
    </Fragment>
    
  )
}

export default App
