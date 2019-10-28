import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './index.scss'
import Home from './views/Home.jsx'
import PageArticleDetail from './views/PageArticleDetail.jsx'
import PageNotFound from './views/PageNotFound.jsx'
import PageCreateArticle from './views/PageCreateArticle.jsx'
import PageArticleUpdate from './views/PageArticleUpdate.jsx'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route  path="/" exact component={Home}/>
          <Route  path="/article/:id" component={PageArticleDetail}/>
          <Route  path="/new" component={PageCreateArticle}/>
          <Route path="/update/:id" component={PageArticleUpdate}/>
          <Redirect exact from="/article" to="/"/>
          <Route  component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
