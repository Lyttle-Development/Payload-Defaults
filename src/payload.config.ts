import {Config} from 'payload';
import * as path from 'path';
import {CONSTANTS, packagePath, setConstants} from './index';
import {Constants} from './constrant-types';

function get(p: string): string {
    console.log('get', p);
    console.log('resolve', path.resolve(packagePath, p));
    return path.join(packagePath, p);
}

// remove secret & db from the config
type DefaultConfig = Omit<Config, 'db' | 'secret'>;


export function getDefaultConfig(constants: Constants): DefaultConfig {
    setConstants(constants);
    return {
        // Default values for the Payload config
        admin: {
            components: {
                Nav: get('components/Navigation'),
            },
            livePreview: {
                breakpoints: [
                    {
                        label: 'Mobile',
                        name: 'mobile',
                        width: 375,
                        height: 667,
                    },
                    {
                        label: 'Tablet',
                        name: 'tablet',
                        width: 768,
                        height: 1024,
                    },
                    {
                        label: 'Desktop',
                        name: 'desktop',
                        width: 1440,
                        height: 900,
                    },
                ],
            },
        },
    };
};