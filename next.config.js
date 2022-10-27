/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  /*i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: true
  },*/
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      namespace: 'ui'
    }
  }
}

module.exports = nextConfig
