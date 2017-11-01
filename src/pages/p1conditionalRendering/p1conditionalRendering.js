import React from 'react';

import If from './if';
import Ternary from './ternary';
import Logic from './logic';
import SwitchCj from './switch';
import Enums from './enums';
import HocNot from './hocNot';
import Hoc from './hoc';
import Hoc2 from './hoc2';
import Hoc3 from './hoc3';

function P1() {
  return (<div>
      <Hoc3 />
      <Hoc2 />
      <Hoc />
      <HocNot />
      <Enums />
      <SwitchCj />
      <Logic />
      <Ternary />
      <If />
  </div>);
}

export default P1;
