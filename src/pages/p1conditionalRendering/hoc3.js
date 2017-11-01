import React, { Component } from 'react';
import {
  branch,
  compose,
  renderComponent,
  renderNothing,
} from 'recompose';

import { Spinner } from '../../utils/styles';

export const Hoc2List = ({ list }) => {
  return (<ul>{list.map((item,index) => <li key={index}>{item}</li>)}</ul>);
};

const withConditionalRenderings = compose(
  branch(({isLoading}) => isLoading,
    renderComponent(() => <Spinner></Spinner>),
    branch((props) => !props.list,
      renderNothing,
      branch((props) => !props.list.length,
        renderComponent(() => <div><p>No items in the list</p></div>),
      ),
    ),
  ),
);

const Hoc2ListWithConditionalRendering = withConditionalRenderings(Hoc2List);

class Hoc3Component extends Component {
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
      <h1>HOC 3</h1>
      <Hoc2ListWithConditionalRendering { ...this.state } />
    </div>);
  }
}

export default Hoc3Component;
