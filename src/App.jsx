import { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import SideBar from './Components/SideBar'
import AddClient from './Pages/AddClient'
import Dashboard from './Pages/Dashboard'

function App () {
  return (
  <Fragment>
    <SideBar/>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard}></Route>
      <Route exact path='/addclient' component={AddClient}></Route>

    </Switch>
  </Fragment>

  )
}

export default App
