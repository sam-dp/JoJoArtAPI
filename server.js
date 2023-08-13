const express = require('express');
const artentryRoutes = require('./src/artentry/routes');

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/api/artentry/', artentryRoutes);

// Catch-all route handler for unmatched routes
app.use('*', (req, res) => {
  return res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => console.log(`app listening on port: ${port}`));