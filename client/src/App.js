import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import FormsIndex from './containers/FormsIndex';
import FormsEdit from './containers/FormsEdit';
import FormsShow from './containers/FormsShow';
import NotFound from './NotFound';
import FormResponses from './containers/FormResponses';
import 'semantic-ui-css/semantic.css'
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

class App extends Component {
  render () {
    return   <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/forms/:id/responses" component={FormResponses} />
        <Route path="/forms/edit/:id" component={FormsEdit} />
        <Route path="/forms/:id" component={FormsShow} />
        <Route path="/" exact component={FormsIndex} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
  }
}

export default App
