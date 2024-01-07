/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
    ],
  },
  env: {
    mapBox_key:
      "pk.eyJ1IjoibW1haG1vdWQxMCIsImEiOiJjbHIybnFmdzYwNWkzMm1vNm83bWYycWkxIn0.EmnRHtbhWN3dZf962DU-Bg",
  },
};
