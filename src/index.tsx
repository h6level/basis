import React from 'react';
// @ts-ignore
import { createRoot } from 'react-dom';

import '@fontsource/ubuntu-mono';
import '@scss/index.scss';
import Home from '@comp/home/index';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<Home />);
