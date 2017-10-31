import React, { Component } from 'react';
import { Spinner } from '../utils/styles';

export const Logic = ({ list }) => {
    return (<div>
      <h1>Logic</h1>
      { !list.length && <div>
          <p>
            Please wait. Loading Items.&nbsp;
          </p>
          <Spinner></Spinner>
        </div>
      }
      { list.length && <div>
          <ul>
            {list.map((item,index) => <li key={index}>{item}</li>)}
          </ul>
          </div>
      }
    </div>);
};

class LogicComponent extends Component {
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
      <Logic
        list={this.state.list}
      />
    </div>);
  }
}

export default LogicComponent;
