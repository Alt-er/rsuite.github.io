import React from 'react';
import ComponentExample from '../ComponentExample';
import { Form, FormGroup, RadioGroup, Icon, Button, Radio } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./disabled.md'),
  require('./radio-group.md'),
  require('./radio-group-inline.md'),
  require('./radio-group-controller.md')
];

export default () => {
  return (
    <ComponentExample
      id="Radio"
      dependencies={{
        Form,
        FormGroup,
        RadioGroup,
        Icon,
        Button,
        Radio
      }}
      context={context}
      examples={examples}
    />
  );
};
