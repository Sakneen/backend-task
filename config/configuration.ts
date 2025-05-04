import { ConfigType } from '@nestjs/config';

const configuration = (): { app: { port: number | string } } => ({
  app: {
    port: process.env.PORT || 3000,
  },
});

export type AppConfig = ConfigType<typeof configuration>;

export default configuration;
