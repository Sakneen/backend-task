import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const appPort =
    process.env.PORT || configService.get<number>('app.port') || 8080;

  await app.listen(appPort);
  logger.log(`Application is running on: http://localhost:${appPort}`);
}
bootstrap();
