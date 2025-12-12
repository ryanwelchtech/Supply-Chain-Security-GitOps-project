const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Health check: Basic liveness probe (SI-2)
app.get('/healthz', (req, res) => {
    res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

// Readiness probe: Checks if app is ready for traffic (SI-6)
app.get('/readyz', (req, res) => {
    // Simulate a dependency check (e.g., DB connection)
    if (Math.random() > 0.01) { // 1% failure for demo realism
        res.status(200).json({ status: 'ready' });
    } else {
        res.status(503).json({ status: 'not ready' });
    }
});

// Demo endpoint: Secure API response
app.get('/', (req, res) => {
    res.json({
        message: 'Hardened-Path: FedRAMP High Compliant Microservice',
        compliance: 'NIST 800-53 (CM-6, SI-7)',
        pod: process.env.HOSTNAME || 'unknown'
    });
});

// Startup probe delay (for slow container starts)
app.get('/startupz', (req, res) => {
    res.status(200).send('started');
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Hardened microservice listening on port ${PORT}`);
});

module.exports = server;