import * as path from 'path';
import {Constants} from './constrant-types';

// Exports
export * from './payload.config';

export const packagePath = path.join(
    __dirname,
    '..',
    'node_modules',
    'payload',
    'dist',
    'index.js'
);


export let CONSTANTS: Constants = {};

export function setConstants(constants: Constants) {
    CONSTANTS = constants;
    console.log('CONSTANTS', CONSTANTS);
}