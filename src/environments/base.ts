/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */

// eslint-disable-next-line
const baseEnv = (baseApi: string) => {
  return {
    socket: {
      host: 'false',
    },
    api: {},
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
};

export default baseEnv;

export type Environment = ReturnType<typeof baseEnv>;
