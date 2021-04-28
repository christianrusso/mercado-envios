require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/');
const globalConfig = require('./config/global');
require('./database');
const task = require('./tasks/synchronization')

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/', routes());

task.executeTask();

app.listen(globalConfig.port);
