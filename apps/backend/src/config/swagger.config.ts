import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SWAGGER_API_ROOT, SWAGGER_API_CURRENT_VERSION } from './constants';
import { env } from './env.config';

function buildSwaggerDescription(appName: string): string {
  return [
    `# ${appName} API`,
    '',
    `HTTP API for ${appName}: authentication and workspaces.`,
    '',
    '## Authentication',
    'Include a JWT in the Authorization header:',
    '```',
    'Authorization: Bearer <your-jwt-token>',
    '```',
    '',
    '## Workspace roles',
    '- **OWNER**: Full control of the workspace and members',
    '- **MEMBER**: Collaborate in the workspace',
    '- **VIEWER**: Read-only access',
  ].join('\n');
}

export const setupSwagger = (app: INestApplication): void => {
  const { APP_NAME, API_PUBLIC_URL, PORT } = env.config;

  let builder = new DocumentBuilder()
    .setTitle(`${APP_NAME} API`)
    .setDescription(buildSwaggerDescription(APP_NAME))
    .setVersion(SWAGGER_API_CURRENT_VERSION)
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .addTag('Authentication', 'User authentication and account management')
    .addTag('Workspaces', 'Workspace management and collaboration')
    .addTag('Admin', 'Administrative functions')
    .addServer(`http://localhost:${PORT}`, 'Local development');

  if (API_PUBLIC_URL) {
    builder = builder.addServer(API_PUBLIC_URL, 'Public API URL');
  }

  const document = SwaggerModule.createDocument(app, builder.build());
  SwaggerModule.setup(SWAGGER_API_ROOT, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      docExpansion: 'none',
      filter: true,
      showRequestHeaders: true,
      tryItOutEnabled: true,
    },
  });
};
