/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'LSIO - croog',
    description: 'A version of LSIOs KASM Registry.',
    icon: 'https://craigdav.github.io/kasm-registry/img/logo.svg',
    listUrl: 'https://craigdav.github.io/kasm-registry/,
    contactUrl: 'https://craigdav.github.io/kasm-registry/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
