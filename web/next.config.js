const path = require("path");
const webpack = require("webpack");
const withPWA = require("next-pwa");
const baseUrl = process.env.NEXT_PUBLIC_API;
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["localhost", "lh3.googleusercontent.com", "imagedelivery.net"],
    minimumCacheTTL: 60,
    disableStaticImages: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  pwa: {
    dest: "public",
    disable: process.env.NEXT_PUBLIC_NODENV !== "production",
  },
  async rewrites() {
    return [
      //***************************
      //Start Auth
      //***************************
      {
        source: "/auth/current",
        destination: `${baseUrl}/auth/current`,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
});
