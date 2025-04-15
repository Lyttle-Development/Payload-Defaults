import {Config} from 'payload';
import * as path from 'path';
import {packagePath} from './index';

function get(p: string): string {
    return path.join(packagePath, p);
}

// remove secret & db from the config
type DefaultConfig = Omit<Config, 'db' | 'secret'>;

export const config: DefaultConfig = {
    // Default values for the Payload config
    admin: {
        avatar: {
            Component: get('/components/ProfilePicture'),
        },
        components: {
            beforeLogin: [],
            beforeDashboard: [],
            graphics: {
                Logo: get('@/components/Logo/PropLess'),
                Icon: get('@/components/Favicon'),
            },
            Nav: get('@/components/DashboardNavigation'),
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