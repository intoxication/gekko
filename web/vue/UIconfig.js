// This config is used in both the
// frontend as well as the web server.

// see https://github.com/askmike/gekko/blob/stable/docs/installing_gekko_on_a_server.md

const CONFIG = {
  headless: false,
  api: {
    host: '127.0.0.1',
    port: 3000,
    
  },
  ui: {
    ssl: true,
    host: 'dipiy.herokuapp.com',
    port: 443,
    path: '/'
  },
  adapter: 'sqlite'
}

