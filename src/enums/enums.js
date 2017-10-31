import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Spinner } from '../utils/styles';

// enum is basically Object/Map, similar to switch without a default
export const Enum = ({ list }) => {
  const key=`${list.length}`; // can create abitritary key via string templates
  const resultSet=['0', '2', '4'];
  if(!resultSet.includes(key)) return <div><h3>Invalid List Lenght</h3></div>;
  else return <div>
  <h1>Enums {key}</h1>
    { /* access object via key below */ }
    {{
       '0': <div>
                <p>
                  Please wait. Loading Items.&nbsp;
                </p>
                <Spinner></Spinner>
              </div>,
        '2': <div>
                 <ul>
                   {list.map((item,index) => <li key={index}>{item}</li>)}
                 </ul>
                 <Spinner></Spinner>
               </div>,
        '4': <div>
                 <ul>
                   {list.map((item,index) => <li key={index}>{item}</li>)}
                 </ul>
              </div>,
     }[key]}
  </div>
};

Enum.propTypes = { list: PropTypes.array.isRequired }

class EnumComponent extends Component {
  state = {
    list: []
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(state => ({ ...state, list: ['a','b'] }));
      setTimeout(() => {
        this.setState(state => ({ ...state, list: [...state.list, 'c','d'] }));
      }, 1000);
    }, 1000);
  }

  render() {
    return (<div>
      <Enum
        list={this.state.list}
      />
    </div>);
  }
}

export default EnumComponent;
