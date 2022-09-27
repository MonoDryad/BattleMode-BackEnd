const app = require('./src/app')

const PORT = process.env.PORT || 3000

const Sequelize = require('sequelize');
sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}/api `)
})