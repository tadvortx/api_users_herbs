require('dotenv').config()

module.exports = {
  herbsCLI: 'mssql',
  client: 'mssql',
  connection: {
    server: '127.0.0.1',
    port: 1433,
    user: 'sa',
    password: 'password',
    database: 'api_users',
    options: {
      trustServerCertificate: true
    }
  }
}
