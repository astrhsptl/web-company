import { Route, Switch } from "react-router-dom"

export default function App() {
  
  return (
    <Switch>
      <Route key={'/'} path={"/"} component={<div>asdf</div>} />
    </Switch>
  )
}
