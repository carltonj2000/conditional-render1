import React, { Component } from 'react';

import { Spinner } from '../utils/styles';

export const Ternary = ({ list }) => {
    return (<div>
      <h1>Ternary</h1>
      { !list.length
          ? <div>
              <p>
                Please wait. Loading Items.&nbsp;
              </p>
              <Spinner></Spinner>
            </div>
          : <div>
            <ul>
              {list.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
            </div>
      }
    </div>);
};

class TernaryComponent extends Component {
  state = {
    list: []
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(state => ({ ...state, list: ['a','b'] }));
    }, 1000);
  }

  render() {
    return (<div>
      <Ternary
        list={this.state.list}
      />
    </div>);
  }
}

export default TernaryComponent;
