const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./routers/project-router')
const resourceRouter = require('./routers/resource-router')
const taskRouter = require('./routers/task-router')

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/projects', projectRouter);
server.use('/resources', resourceRouter);
server.use('/tasks', taskRouter);

module.exports = server;
