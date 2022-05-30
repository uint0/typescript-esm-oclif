#!/usr/bin/env -S node --loader ts-node/esm

import * as oclif from '@oclif/core';
import * as tsNode from 'ts-node';

import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const project = path.join(__dirname, '..', 'tsconfig.json');

// In dev mode -> use ts-node and dev plugins
process.env.NODE_ENV = 'development'

tsNode.register({project})

// In dev mode, always show stack traces
oclif.settings.debug = true;

// Start the CLI
oclif.run(void 0, import.meta.url).then(oclif.flush).catch(oclif.Errors.handle)