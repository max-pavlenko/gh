/** @type {import('next').NextConfig} */

import PUBLIC_RUNTIME_CONFIG from './src/shared/utils/publicRuntimeConfig.mjs';

const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: PUBLIC_RUNTIME_CONFIG,
    images: {
        domains: ['avatars.githubusercontent.com'],
    }
};

export default nextConfig;
