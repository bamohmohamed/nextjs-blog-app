const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_user: "xxx",
        mongodb_pwd: "xxx",
        mongodb_cluster: "cluster0",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_user: "xxx",
      mongodb_pwd: "xxx",
      mongodb_cluster: "cluster0",
    },
  };
};

module.exports = nextConfig;
