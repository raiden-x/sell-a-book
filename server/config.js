const env = require('dotenv');

const result = env.config();
const { parsed: envs } = result;
module.exports = envs;
