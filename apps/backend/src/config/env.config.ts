/* eslint-disable prettier/prettier */
import { config } from 'dotenv';

(config as () => void)();

interface Config {
  /** Short product name for emails, Swagger, and UI copy (set NEXT_PUBLIC_APP_NAME on the web app to match). */
  APP_NAME: string;
  /**
   * Optional public API base URL (no trailing slash), e.g. https://api.example.com.
   * When set, Swagger lists it as an additional server alongside local.
   */
  API_PUBLIC_URL: string;
  /** Public web app URL (no trailing slash). Used in email links. */
  FRONTEND_URL: string;
  DATABASE_URL: string;
  DATABASE_POOL_SIZE: number;
  DATABASE_POOL_TIMEOUT: number;
  DATABASE_CONNECT_TIMEOUT: number;
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASS: string;
  SMTP_SECURE: boolean;
  SMTP_FROM: string;
  PORT: number;
  JWT_SECRET: string;
  CORS_ORIGINS: string;
  THROTTLE_TTL: number;
  THROTTLE_LIMIT: number;
  GLOBAL_PREFIX: string;
  NODE_ENV: string;
}

function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (!value && defaultValue === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value || defaultValue || '';
}

export const env = {
  config: {
    APP_NAME: getEnvVar('APP_NAME', 'Full Stack App Starter Pack'),
    API_PUBLIC_URL: getEnvVar('API_PUBLIC_URL', '').replace(/\/+$/, ''),
    FRONTEND_URL: getEnvVar('FRONTEND_URL', 'http://localhost:3000').replace(
      /\/+$/,
      '',
    ),
    DATABASE_URL: getEnvVar('DATABASE_URL'),
    DATABASE_POOL_SIZE: Number(getEnvVar('DATABASE_POOL_SIZE', '10')),
    DATABASE_POOL_TIMEOUT: Number(getEnvVar('DATABASE_POOL_TIMEOUT', '10000')),
    DATABASE_CONNECT_TIMEOUT: Number(
      getEnvVar('DATABASE_CONNECT_TIMEOUT', '60000'),
    ),
    SMTP_HOST: getEnvVar('SMTP_HOST'),
    SMTP_PORT: Number(getEnvVar('SMTP_PORT', '587')),
    SMTP_USER: getEnvVar('SMTP_USER'),
    SMTP_PASS: getEnvVar('SMTP_PASS'),
    SMTP_SECURE: getEnvVar('SMTP_SECURE', 'false') === 'true',
    SMTP_FROM: getEnvVar('SMTP_FROM'),
    PORT: Number(getEnvVar('PORT', '8000')),
    JWT_SECRET: getEnvVar('JWT_SECRET'),
    CORS_ORIGINS: getEnvVar('CORS_ORIGINS', '*'),
    THROTTLE_TTL: Number(getEnvVar('THROTTLE_TTL', '60')),
    THROTTLE_LIMIT: Number(getEnvVar('THROTTLE_LIMIT', '100')),
    GLOBAL_PREFIX: getEnvVar('GLOBAL_PREFIX', 'api/v1/'),
    NODE_ENV: getEnvVar('NODE_ENV', 'development'),
  } satisfies Config,
};
