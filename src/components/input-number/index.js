import React from 'react';
import ComponentExample from '../ComponentExample';
import { InputNumber } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./size.md'),
  require('./decimals.md'),
  require('./max-min.md'),
  require('./step.md'),
  require('./disabled.md'),
  require('./fix.md'),
  require('./control.md')
];

export default () => {
  return (
    <ComponentExample
      id="InputNumber"
      dependencies={{
        InputNumber
      }}
      context={context}
      examples={examples}
    />
  );
};
