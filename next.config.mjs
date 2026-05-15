/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: (() => {
      const base = process.env.WP_BASE_URL;
      if (!base) return [];
      try {
        const u = new URL(base);
        return [
          {
            protocol: u.protocol.replace(":", ""),
            hostname: u.hostname,
            port: u.port || "",
            pathname: "/**",
          },
          // Some WP installs serve images from www.* even if base is without/with it.
          ...(u.hostname.startsWith("www.")
            ? []
            : [
                {
                  protocol: u.protocol.replace(":", ""),
                  hostname: `www.${u.hostname}`,
                  port: u.port || "",
                  pathname: "/**",
                },
              ]),
        ];
      } catch {
        return [];
      }
    })(),
  },
};

export default nextConfig;
