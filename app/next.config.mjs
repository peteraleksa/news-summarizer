/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.experiments = {
            topLevelAwait: true,
            layers: true,
        };
        return config;
    },
};


export default nextConfig;
