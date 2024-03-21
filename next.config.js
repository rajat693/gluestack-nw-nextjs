const { withGluestackUI } = require("@gluestack/ui-next-adapter")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-native-css-interop","nativewind"],
};

module.exports = withGluestackUI(nextConfig)