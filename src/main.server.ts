// import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';
// import { config } from './app/app.config.server';

// const bootstrap = () => bootstrapApplication(App, config);

// export default bootstrap;


import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { Routes } from '@angular/router';

const bootstrap = () => bootstrapApplication(App, config);

export default {
    bootstrap,
    /**
     * 👇 Hàm này fix lỗi: khai báo các giá trị cụ thể cho route động `detail/:id`
     */
    getPrerenderRoutes(): Routes {
        return [
            { path: 'detail/0.141193493107266' },
            { path: 'detail/0.253956475090453' },
            { path: 'detail/0.666467571051155' }
        ];
    }
};
