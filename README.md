# react-ts-context

app.tsx

```js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { context } from "./context";

export const myContext = React.createContext({});

function App() {
  return (
    <myContext.Provider value={"akshay"}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/context" />} />
            <Route path="/context" component={context} />
          </Switch>
        </Router>
      </div>
    </myContext.Provider>
  );
}

export default App;
```

context.tsx

```js
import React, { useContext } from 'react';
import { myContext } from './app';

export function context() {
  return (
    <div>
      <Display />
    </div>
  );
}

function Display() {
   const value = useContext(myContext);
  return <div>Context Value is {value}.</div>;
}
```
