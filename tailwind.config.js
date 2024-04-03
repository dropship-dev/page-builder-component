/** @type {import('tailwindcss').Config} */

import config from '@dropship-dev/react-components/tailwind.config'

module.exports = {
  ...config,
  content: [
    './node_modules/@dropship-dev/react-components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}
