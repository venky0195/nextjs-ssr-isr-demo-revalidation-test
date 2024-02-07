const nextConfig = {
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
    generateBuildId: () => {    
      return  process.env.CONTENTSTACK_LAUNCH_DEPLOYMENT_UID || "testBuild"
    },
  },
};

module.exports = nextConfig