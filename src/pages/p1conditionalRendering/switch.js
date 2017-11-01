import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Spinner } from '../../utils/styles';

// len is seperate just to demo propTypes warning generation on console
export const Switch = ({ list, len }) => { return <div>
  {(() => {
    switch (len) {
      case 0:
        return (<div>
          <h1>Switch</h1>
          <p>
            Please wait. Loading Items.&nbsp;
          </p>
          <Spinner></Spinner>
        </div>);
      case 2:
        return (<div>
          <h1>Switch 2</h1>
          <ul>
            {list.map((item,index) => <li key={index}>{item}</li>)}
          </ul>
          <Spinner></Spinner>
        </div>);
      default:
        return (<div>
          <h1>Switch All</h1>
          <ul>
            {list.map((item,index) => <li key={index}>{item}</li>)}
          </ul>
        </div>);
    }
  })()}
</div>};

Switch.propTypes = { len: PropTypes.oneOf([0, 2]) }

class SwitchComponent extends Component {
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
      <Switch
        list={this.state.list}
        len={this.state.list.length}
      />
    </div>);
  }
}

export default SwitchComponent;
