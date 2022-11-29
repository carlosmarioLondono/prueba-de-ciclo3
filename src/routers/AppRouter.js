import{BrowserRouter as Router,Switch,Route}from 'react-router-dom'

export default function AppRouter(){

  return (
      <Route>
        <Switch>
          <Route exact path ="/"component={HomePage} />
          <Route exact path ="/login"component={loginPage} />
          <Route exact path ="/register"component={registerPage} />
          <Route exact path ="/account"component={AccounPaget} />
          <Route exact path ="/projects"component={ProjectsPage} />
          <Route exact path ="./project/:proyectId"component={projectPage} />
          <Route exact path ="./admin/users"component={UsersPage} />
          <Route exact path ="*"component={NotFoundPage} />

        </Switch>
      </Route>
  )
}
