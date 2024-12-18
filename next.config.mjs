/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Identifica los archivos SVG
      use: ["@svgr/webpack"], // Usa @svgr/webpack para tratarlos como componentes
    });
    return config;
  },
};

export default nextConfig;
