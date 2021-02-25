/**
 * @file config.js
 */

/**
 * app 启动的端口号
 * @type {number}
 */
export const port = 4100;

/**
 * request 的 base url
 * @type {string}
 */
export const baseUrl = '/pieb-with-dpe';

/**
 * 数据库连接配置
 * @type {{charset: string, database: string, port: number, host: string, username: string}}
 */
export const database = {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'pieb_with_dpe',
    charset: 'UTF8_BIM'
};

export default {
    port,
    baseUrl,
    database
};
