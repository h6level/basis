import React from 'react';
// @ts-ignore
import { createRoot } from 'react-dom';

import '@fontsource/ubuntu-mono';
import '@scss/index.scss';
import AppRoot from '@con/app-root';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<AppRoot />);
