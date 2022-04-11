const { DB_HOST, DB_SCHEMA, DB_NAME, DB_PORT, DB_USER, DB_PW } = process.env;

module.exports = {
  type: 'postgres',
  host: DB_HOST || 'localhost',
  port: DB_PORT || 5432,
  username: DB_USER || 'alexey.maltsev',
  password: DB_PW || 'password',
  schema: DB_SCHEMA || 'app',
  database: DB_NAME || 'alexeymaltsev',
  entities: ['build/src/**/*.entity{.ts,.js}'],
  seeds: ['build/seeds/**/*.seed{.ts,.js}'],
  migrations: ['build/migrations/**/*{.ts,.js}'],
  factories: ['build/seeds/**/*{.ts,.js}'],
  synchronize: false,
  ssl: {
    rejectUnauthorized: false,
  },
};
