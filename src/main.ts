import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('Companies API')
    .setDescription('The Companies API description')
    .setVersion('1.0')
    .addTag('companies')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  console.log(`App started. Swagger listening at http://localhost:${port}/api`);
}
bootstrap();
