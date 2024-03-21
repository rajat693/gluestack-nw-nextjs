/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["nativewind", "react-native-css-interop"],
  webpack: (config, { isServer }) => {
    // Add aliases for react-native and react-native-web
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': isServer ? 'react-native-web' : 'react-native-web/dist/cjs',
      // Add more aliases if needed
    };

    return config;
  },
};

export default nextConfig;
