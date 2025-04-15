import * as path from 'path';

// Exports
export * from './payload.config'

export const packagePath = path.join(
    __dirname,
    '..',
    'node_modules',
    'payload',
    'dist',
    'index.js'
    )

