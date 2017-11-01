import React, { Component } from 'react';
import { compose } from 'recompose';

import { Spinner } from '../../utils/styles';

// enum is basically Object/Map, similar to switch without a default
export const HocList = ({ list }) => {
  return (<ul>{list.map((item,index) => <li key={index}>{item}</li>)}</ul>);
};

/*
function withListNull(Component) {
  return function(props) {
    return !props.list ? null : <Component { ...props } />;
  };
}
*/
/* same as function commented above */
const withHocListNull = (Component) => (props) =>
  !props.list ? null : <Component { ...props } />;

const withHocListEmpty = (Component) => (props) =>
  !props.list.length
    ? <div><p>No items in the list</p></div>
    : <Component { ...props } />;

const withHocListLoading = (Component) => ({ isLoading, ...others }) =>
  isLoading
    ? <Spinner></Spinner>
    : <Component { ...others } />;

const withConditionalRenderings = compose(
    withHocListLoading,
    withHocListNull,
    withHocListEmpty
);

const HocListWithConditionalRendering = withConditionalRenderings(HocList);

class HocComponent extends Component {
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
      <h1>HOC</h1>
      <HocListWithConditionalRendering { ...this.state } />
    </div>);
  }
}

export default HocComponent;
