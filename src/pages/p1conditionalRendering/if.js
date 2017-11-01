import React, { Component } from 'react';

import { Spinner } from '../../utils/styles';

export const It = ({ list }) => {
  if (!list.length) {
    return (<div>
      <h1>If</h1>
      <p>
        Please wait. Loading Items.&nbsp;
      </p>
      <Spinner></Spinner>
    </div>);
  } else {
    return (<div>
      <h1>If</h1>
      <ul>
        {list.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>);
  }
}

class IfComponent extends Component {
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
      <It
        list={this.state.list}
      />
    </div>);
  }
}

export default IfComponent;
