import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';
import Header from './Header';
import Test from'./Test';
import NewRec from'./NewRec';

import Moment from 'moment';

function App (){

  return (

    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/newRec' render={()=><NewRec/>}/>
        <Route  path='/test' component={Test} />

        <Route component={Error404} />
        <h1>App Page</h1>
      </Switch>
    </div>
  );
}

export default App;
