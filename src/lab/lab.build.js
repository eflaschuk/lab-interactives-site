({
  baseUrl: './',
  // Use Almond.
  // A replacement AMD loader for RequireJS. It is a smaller "shim" loader,
  // providing the minimal AMD API footprint that includes loader plugin support.
  name: '../vendor/almond/almond',

  // Export Public API.
  include: ['public-api'],
  // Out file.
  out: '../../server/public/lab/lab.js',
  // Do not use UglifyJS.
  // It's done via Makefile routines.
  optimize: 'none',
  //Allow "use strict"; be included in the RequireJS files.
  useStrict: true,

  // Paths to CommonJS modules.
  packages: [
    {
        name: "arrays",
        main: "index",
        location: "../modules/arrays"
    }
  ],

  // Additional modules.
  paths: {
    'cs' :'../vendor/require-cs/cs',
    'coffee-script': '../vendor/coffee-script/extras/coffee-script'
  },

  // Protect global namespace and call export of API.
  wrap: {
    start: "(function() {",
    // Manual require at the end of the file instead of such option:
    // insertRequire: ['public-api'],
    // It is a workaround, as Almond by default simulates async call
    // of require (sets timeout). Last argument (true) forces sync call instead.
    // TODO: ask a question on requirejs group about this issue.
    end: "require(['public-api'], undefined, undefined, true); }());"
  }
})
