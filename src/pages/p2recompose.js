import React from 'react';
import {
  compose,
  branch,
  defaultProps,
  flattenProp,
  mapProps,
  renameProps,
  renderComponent,
  withHandlers,
  withProps,
  withState,
} from 'recompose';

const enhance = compose (
  defaultProps({
    counter: 3,
  }),
  renameProps({
    counter: "counter2",
  }),
  withProps({
    employee: {name: "Carlton", id: 11}
  }),
  withState('cntr', 'updateCounter', 0),
  withHandlers({
    incr: ({updateCounter}) => () => updateCounter(c => c + 1),
    decr: ({updateCounter}) => () => updateCounter(c => c - 1),
    zero: ({updateCounter}) => () => updateCounter(c => 0),
  }),
  mapProps(({employee, ...rest}) => {
    return {
      ...rest,
      employee: {
        ...employee,
        name: employee.name.toUpperCase()
      }
    }
  }),
  flattenProp('employee'),
  branch(
    ({id}) => id < 10,
    renderComponent(Under40)
  )
);

function App({counter2, name, id, cntr, updateCounter,
  incr, decr, zero, ...others}) {
  return (
    <div>
    <h1>Page ${others.page} recompose</h1>
      <p>Counter: {counter2}</p>
      <p>
        Cntr: {cntr} &nbsp;
        <button onClick={() => updateCounter(c => c + 1)}>+</button>
        <button onClick={() => updateCounter(c => c - 1)}>-</button>,
        <button onClick={incr}>+</button>
        <button onClick={decr}>-</button>
        <button onClick={zero}>0</button>
      </p>
      <p>Employee: {name}, ID: {id}</p>
    </div>
  );
}

function Under40({name, id}) {
  return (<div>
      <h1>Hey you are one of the early ones.</h1>
  </div>);
}

export default enhance(App);
