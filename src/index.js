import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import './index.css';

import Uploader from './components/Uploader';
import Container from './components/Container';

ReactDOM.render(
  <Container>
    <Uploader
      name='file'
      accept='.csv'
      multiple={false}
      action='https://bitstrapped-dgvbi2a2hq-uc.a.run.app/upload/csv'
    />
  </Container>,
  document.getElementById('root')
);
