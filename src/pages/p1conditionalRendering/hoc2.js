import React, { Component } from 'react';
import { compose } from 'recompose';

import { Spinner } from '../../utils/styles';

export const Hoc2List = ({ list }) => {
  return (<ul>{list.map((item,index) => <li key={index}>{item}</li>)}</ul>);
};

const withMaybe = (conditionRenderingFn) => (Component) => (props) =>
  conditionRenderingFn(props) ? null : <Component { ...props } />;

const hocListNull = (props) => !props.list;

const withEither = (conditionRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionRenderingFn(props) ? <EitherComponent /> : <Component { ...props } />;

const hocListEmpty = (props) => !props.list.length;
const hocListEmptyComponent = () =>
    <div><p>No items in the list</p></div>;

const hocListLoading = (props) => props.isLoading;
const hocListLoadingComponent = () => <Spinner></Spinner>;

const withConditionalRenderings = compose(
    withEither(hocListLoading, hocListLoadingComponent),
    withMaybe(hocListNull),
    withEither(hocListEmpty, hocListEmptyComponent)
);

const Hoc2ListWithConditionalRendering = withConditionalRenderings(Hoc2List);

class Hoc2Component extends Component {
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
      <h1>HOC 2</h1>
      <Hoc2ListWithConditionalRendering { ...this.state } />
    </div>);
  }
}

export default Hoc2Component;
