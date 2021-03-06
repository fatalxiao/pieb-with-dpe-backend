/**
 * @file app.js
 */

// Koa
import Koa from 'koa';
import cors from '@koa/cors';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';

// Statics
import config from './config.js';

// Vendors
import mappingRouterToController from './app/utils/mappingRouterToController.js';

const app = new Koa();

app.use(cors())
   .use(serve('.'))
   .use(bodyParser())
   .use(mappingRouterToController(__dirname))
   .listen(config.port, error => {

       if (error) {
           console.log(error);
           return;
       }

       console.log(`Server started and listen on port ${config.port}`);

   });
