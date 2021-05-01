/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */

// eslint-disable-next-line
const baseEnv = (baseApi: string) => {
  return {
    socket: {
      host: process.env.REACT_APP_SOCKET_IO_HOST ?? 'ERROR',
      port: parseInt(process.env.REACT_APP_SOCKET_IO_PORT ?? '8000'),
    },
    api: {},
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
};

export default baseEnv;

export type Environment = ReturnType<typeof baseEnv>;
