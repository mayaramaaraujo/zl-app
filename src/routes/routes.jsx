import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Photos, Videos, Diary, Biography, Contact } from "../pages/pagesExport"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/photos">
          <Photos />
        </Route>
        <Route exact path="/videos">
          <Videos />
        </Route>
        <Route exact path="/diary">
          <Diary />
        </Route>
        <Route exact path="/biography">
          <Biography />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          404 - Page not found.
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;