const envStaging = require("./env/staging");
const envLocal = require("./env/local");
const envProduction = require("./env/production");

const env =
  process.env.NODE_ENV === "production"
    ? envProduction
    : process.env.API_ENV === "local"
    ? envLocal
    : envStaging;

// next.js configuration
const nextConfig = {
  env,
  webpack: (config) => {
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

module.exports = nextConfig;
