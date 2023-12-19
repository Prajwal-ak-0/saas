/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        "googleusercontent.com",
        "oaidalleapiprodscus.blob.core.windows.net",
        "cdn.openai.com"
      ]
    },
  }
  
  module.exports = nextConfig
  