import { Config } from 'payload'

// remove secret & db from the config
type DefaultConfig = Omit<Config, 'db' | 'secret'>;

export const defaultConfig: DefaultConfig = {
  // Default values for the Payload config
  admin: {
    components: {
      Nav: '@/../libs/payload-defaults/src/components/Navigation',
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
}
