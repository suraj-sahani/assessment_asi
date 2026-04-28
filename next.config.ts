import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "stimg.cardekho.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "digitalassets.tesla.com" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "images.samsung.com" },
      { protocol: "https", hostname: "www.royalenfield.com" },
      { protocol: "https", hostname: "i.dell.com" },
      { protocol: "https", hostname: "cdn.bikedekho.com" },
      { protocol: "https", hostname: "www.amd.com" },
      { protocol: "https", hostname: "images10.gaadi.com" },
      { protocol: "https", hostname: "static3.toyotabharat.com" },
      { protocol: "https", hostname: "cdn-s3.autocarindia.com" },
      { protocol: "https", hostname: "amateurphotographer.com" },
      { protocol: "https", hostname: "www.cnet.com" },
      { protocol: "https", hostname: "cdn.mos.cms.futurecdn.net" },
      { protocol: "https", hostname: "imgs.search.brave.com" },
    ],
  },
};

export default nextConfig;
