module.exports = {
    development: {
      client: 'mssql',
      connection: {
        database: 'api_users',
        user: 'sa',
        password: 'password',
        server: '127.0.0.1',
        port: 1433,
        options: {
          trustServerCertificate: true
        }
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: './src/infra/data/database/migrations',
        tableName: 'knex_migrations'
      }
    },
    staging: {},
    production: {}
  
  }
  