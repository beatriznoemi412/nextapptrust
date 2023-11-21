const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"],
  },
};

if (!nextConfig.experimental || !nextConfig.experimental.serverComponentsExternalPackages) {
  throw new Error('La configuración experimental de Next.js es inválida o no está definida correctamente.');
}

module.exports = nextConfig;
