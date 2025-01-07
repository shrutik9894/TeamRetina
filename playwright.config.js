// @ts-check
const { devices, expect } = require('@playwright/test');
const config ={
  testDir: './tests',
  expect:{
    TIMEOUT:5000
  },

reporter: 'html',
// @ts-ignore
use: {
  browserName: 'Chromium',
  headless : false

},
};

