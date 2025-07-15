// import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';
// import { config } from './app/app.config.server';

// const bootstrap = () => bootstrapApplication(App, config);

// export default bootstrap;


import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

export const bootstrap = () => bootstrapApplication(App, config);

export const getPrerenderRoutes = () => [
    { path: 'detail/0.141193493107266' },
    { path: 'detail/0.253956475090453' },
    { path: 'detail/0.666467571051155' }
];

export default bootstrap;