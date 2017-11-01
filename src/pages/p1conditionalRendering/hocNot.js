import React, { Component } from 'react';

import { Spinner } from '../../utils/styles';

// enum is basically Object/Map, similar to switch without a default
export const HocNot = ({ list, isLoading }) => {
  if(isLoading) return (<Spinner></Spinner>);
  if(!list) return null;
  if (!list.length) return (<div><p>No items in the list</p></div>);
  return (<ul>{list.map((item,index) => <li key={index}>{item}</li>)}</ul>);
};

class HocNotComponent extends Component {
  state = {
    list: null,
    isLoading: true,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(state => ({ ...state, isLoading:  false }));
      setTimeout(() => {
          this.setState(state => ({ ...state, list: []}));
        setTimeout(() => {
          this.setState(state => ({ ...state, list: ['a','b'] }));
          setTimeout(() => {
            this.setState(state => ({ ...state, list: [...state.list, 'c','d']}));
          }, 700);
        }, 700);
      }, 700);
    }, 700);
  }

  render() {
    return (<div>
      <h1>HOC Not</h1>
      <HocNot
        list={this.state.list}
        isLoading={this.state.isLoading}
      />
    </div>);
  }
}

export default HocNotComponent;
