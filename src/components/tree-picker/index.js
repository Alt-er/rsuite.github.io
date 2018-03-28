import React from 'react';
import ComponentExample from '../ComponentExample';
import { TreePicker, Icon } from '../../rsuiteSource';
import data from '../../resources/data/city';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./placement.md'),
  require('./disabled.md'),
  require('./searchable.md'),
  require('./custom.md'),
  require('./async.md')
];

export default () => {
  return (
    <ComponentExample
      id="TreePicker"
      context={context}
      examples={examples}
      dependencies={{
        TreePicker,
        Icon,
        data
      }}
    />
  );
};
