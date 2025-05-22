#!/usr/bin/env node

const { serveHTTP, publishToCentral } = require('stremio-addon-sdk');
const addonInterface = require('./server');

// Start the Stremio addon server
serveHTTP(addonInterface, { port: process.env.PORT || 7000 })
    .then(({ url }) => {
        console.log(`DFlix Series Addon running at ${url}`);
        
        // When deployed on Beam Up, you can uncomment this to publish to the Stremio addon catalog
        // The URL will be your Beam Up deployment URL
        // publishToCentral("https://dflix-stremio-addon.beamup.dev/manifest.json")
        // .then(result => console.log(result))
        // .catch(err => console.error(err));
    })
    .catch(err => console.error(err));