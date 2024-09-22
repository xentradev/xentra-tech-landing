import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["mui-color-input"],
  env: {
    // variables de entorno
  },
};

export default withNextIntl(nextConfig);
