import environment, { Environment } from './base';

const baseApi = 'http://localhost:8000';
const env = environment(baseApi);

const developmentEnv: Environment = {
  ...env,
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;
