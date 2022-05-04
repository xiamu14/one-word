/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";
import WindicssWebpackPlugin from "windicss-webpack-plugin";
export default withContentlayer({
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new WindicssWebpackPlugin());
    return config;
  },
});
