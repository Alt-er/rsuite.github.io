import React from 'react';
import ComponentExample from '../ComponentExample';
import { Nav, Button, Icon, Dropdown, Row, Col } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./appearance.md'),
  require('./vertical.md'),
  require('./status.md'),
  require('./justified.md'),
  require('./dropdown.md'),
  require('./icon.md')
];

export default () => {
  return (
    <ComponentExample
      id="Nav"
      dependencies={{
        Dropdown,
        Icon,
        Button,
        Nav,
        Row,
        Col
      }}
      context={context}
      examples={examples}
    />
  );
};
