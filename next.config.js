/** @type {import('next').NextConfig} */

const dotenv = require("dotenv");
const res = dotenv.config({ path: "./.env" });
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  env: {
    ENV: res.parsed.ENV,
    BACKEND_URL: res.parsed.BACKEND_URL,
    API_URL: res.parsed.API_URL,
  },
  nextConfig,
};
