import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as exphbs from 'express-handlebars';

async function bootstrap() {
  // Crear una instancia de la aplicación NestJS
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Establecer el directorio base de las vistas
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Configurar Handlebars como motor de vistas
  const hbs = exphbs.create({
    // Extensión de archivo para las plantillas
    extname: '.hbs',
    // Directorio para los archivos de diseño (layouts)
    layoutsDir: join(__dirname, '..', 'views', 'layouts'),
    // Directorio para los archivos parciales
    partialsDir: join(__dirname, '..', 'views', 'partials'),
  });

  // Configurar el motor de plantillas para renderizar archivos con extensión .hbs
  app.engine('hbs', (filePath, options, callback) => {
    hbs
      .renderView(filePath, options) // Renderizar la vista con Handlebars
      .then((html) => callback(null, html)) // Llamar al callback con el HTML renderizado
      .catch((err) => callback(err)); // Manejar errores
  });

  // Establecer Handlebars como motor de vistas
  app.setViewEngine('hbs');
  // Configurar el directorio de archivos estáticos
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
}
bootstrap();
