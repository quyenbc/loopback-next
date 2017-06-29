'use strict';
const spawn = require('child_process').spawn;
// Call sdocs
spawn(
  '../../node_modules/strong-docs/bin/cli.js',
  ['-o', 'api-docs']
).on('close', (number, signal) => (process.exitCode = number));
