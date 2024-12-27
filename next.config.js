/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },

  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/contact-us": { page: "/contact-us" },
      "/fellowships": { page: "/fellowships" },
      "/members": { page: "/members" },
      "/services": { page: "/services" },
      "/zBlock1": { page: "/zBlock1" },
      "/zBlock2": { page: "/zBlock2" },
      "/zk": { page: "/zk" },
    };
  },
};

module.exports = nextConfig;
