// import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';
// import { config } from './app/app.config.server';

// const bootstrap = () => bootstrapApplication(App, config);

// export default bootstrap;


import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

export const bootstrap = () => bootstrapApplication(App, config);

/**
 * Đây là cách đúng với Angular SSR mới (dùng `getPrerenderParams`)
 * fix lỗi: "route uses prerendering and includes parameters..."
 */
export const getPrerenderParams = () => {
    return {
        'detail/:id': [
            { id: '0.141193493107266' },
            { id: '0.253956475090453' },
            { id: '0.666467571051155' }
        ]
    };
};

// Bắt buộc có để Netlify SSR không lỗi
export default bootstrap;
