import { hot } from 'react-hot-loader';
import * as React from 'react';
import Counter from './view/Counter';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Counter from={10} to={100}/>
      </main>
    );
  }
}

export default hot(module)(App);
