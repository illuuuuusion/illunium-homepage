import type { Config } from 'tailwindcss'

export default {
  content: [
    './app.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#070710',
          2: '#0d0d1a',
          3: '#12121f'
        },
        purple: {
          DEFAULT: '#9747FF',
          dim: '#6b2fd4',
          pale: '#c9a0ff',
          ghost: 'rgba(151,71,255,0.08)'
        },
        ink: {
          DEFAULT: '#ede9f7',
          mid: '#9d99b5',
          dim: '#4a4763'
        },
        border: {
          DEFAULT: 'rgba(151,71,255,0.18)',
          sharp: 'rgba(151,71,255,0.40)'
        }
      },
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['Outfit', 'sans-serif']
      },
      fontSize: {
        label: ['0.76rem', { letterSpacing: '0.18em', lineHeight: '1.2' }],
        tag: ['0.76rem', { letterSpacing: '0.08em', lineHeight: '1.2' }]
      }
    }
  },
  plugins: []
} satisfies Config
