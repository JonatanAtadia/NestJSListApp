// import { NestFactory } from '@nestjs/core';
// import { NestExpressApplication } from '@nestjs/platform-express';
// import { join } from 'path';
// import { AppModule } from './app.module';
// import exphbs from 'express-handlebars';

// async function bootstrap() {
//   const app = await NestFactory.create<NestExpressApplication>(AppModule);

//   app.useStaticAssets(join(__dirname, '..', 'public'));
//   app.setBaseViewsDir(join(__dirname, '..', 'views'));

//   app.engine(
//     'hbs',
//     exphbs({
//       extname: 'hbs',
//       defaultLayout: 'layout',
//       layoutsDir: join(__dirname, '..', 'views', 'layouts'),
//     }),
//   );

//   app.setViewEngine('hbs');

//   await app.listen(3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as exphbs from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Establecer el directorio base de las vistas
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Configurar Handlebars como motor de vistas
  const hbs = exphbs.create({
    extname: '.hbs',
    layoutsDir: join(__dirname, '..', 'views', 'layouts'),
    partialsDir: join(__dirname, '..', 'views', 'partials'),
    // Permitir acceso a propiedades no propias
    // allowProtoPropertiesByDefault: true,
  });

  app.engine('hbs', (filePath, options, callback) => {
    hbs
      .renderView(filePath, options)
      .then((html) => callback(null, html))
      .catch((err) => callback(err));
  });

  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
