module.exports = function (api) {
  api.cache(true);
  const plugins = [
    [
      "@simbathesailor/babel-plugin-use-what-changed",
      {
        "active": process.env.NODE_ENV === "development" // boolean
      }
    ]
  ];

  return {
    plugins
  };
}