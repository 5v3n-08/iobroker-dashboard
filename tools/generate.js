const {generateTemplateFiles} = require('generate-template-files');

generateTemplateFiles([
    // React
    {
      option: '[COMPONENT] React Functional Component',
      defaultCase: '(pascalCase)',
      entry: {
          folderPath: './tools/templates/react/function-component/',
      },
      stringReplacers: ['__page__','__name__'],
      output: {
          path: './src/components/__page__(lowerCase)/components/__name__(kebabCase)',
          pathAndFileNameDefaultCase: '(pascalCase)',
      },
    },
    {
        option: '[PAGE] React Functional Component',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/react/function-component/',
        },
        stringReplacers: ['__name__'],
        output: {
            path: './src/pages/__name__(kebabCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
    {
      option: '[GLOBAL] React Functional Component',
      defaultCase: '(pascalCase)',
      entry: {
          folderPath: './tools/templates/react/function-component/',
      },
      stringReplacers: ['__name__'],
      output: {
          path: './src/components/__name__(kebabCase)',
          pathAndFileNameDefaultCase: '(pascalCase)',
      },
  },
  {
      option: 'Model',
      defaultCase: '(pascalCase)',
      entry: {
          folderPath: './tools/templates/react/__model__Model.ts',
      },
      stringReplacers: ['__model__'],
      output: {
          path: './src/models/__model__Model.ts',
          pathAndFileNameDefaultCase: '(pascalCase)',
      },
  },
  {
      option: 'React Redux Store',
      defaultCase: '(pascalCase)',
      entry: {
          folderPath: './tools/templates/react/redux-store/',
      },
      stringReplacers: ['__store__'],
      output: {
          path: './src/stores/__store__(kebabCase)',
          pathAndFileNameDefaultCase: '(pascalCase)',
      },
  },
    // {
    //     option: 'React Component',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/react/component/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/views/components/__name__(kebabCase)',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    // },
    // {
    //     option: 'React Connected Component',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/react/connected-component/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/views/__name__(kebabCase)',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    // },
    {
        option: 'Selector',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/react/selectors/',
        },
        stringReplacers: ['__name__'],
        output: {
            path: './src/selectors/__name__(kebabCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },

    {
        option: 'Interface',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/react/I__interface__.ts',
        },
        stringReplacers: ['__interface__'],
        output: {
            path: './src/models/I__interface__.ts',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
    {
        option: 'Enum',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/react/__enum__Enum.ts',
        },
        stringReplacers: ['__enum__'],
        output: {
            path: './src/constants/__enum__Enum.ts',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
]);
