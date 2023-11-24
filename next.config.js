/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const withVideos = require("next-videos");

module.exports = withVideos(nextConfig);
