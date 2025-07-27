import 'dotenv/config'

export default {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'POSTGRES',
  database: process.env.DB_NAME || 'blastburger',
  port: process.env.DB_PORT || 5436,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}