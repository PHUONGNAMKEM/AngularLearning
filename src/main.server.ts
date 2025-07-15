// import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';
// import { config } from './app/app.config.server';

// const bootstrap = () => bootstrapApplication(App, config);

// export default bootstrap;

// src/main.server.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(App, config);

const getPrerenderParams = () => {
    return {
        'detail/:id': [
            { id: '0.141193493107266' },
            { id: '0.253956475090453' },
            { id: '0.666467571051155' }
        ]
    };
};

export default {
    bootstrap,
    getPrerenderParams
};

