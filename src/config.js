/**
 * @file config.js
 */

export default {

    port: 4100,

    database: {
        host: 'localhost',
        port: 3306,
        username: 'root',
        // password: 'root',
        database: 'pieb_with_dpe',
        charset: 'UTF8_BIM'
    },

    swaggerConfig: {
        swagger: '2.0',
        info: {
            title: 'DPE Service',
            version: '1.0.0',
            description: ''
        },
        tags: [],
        paths: {},
        definitions: {}
    }

};
