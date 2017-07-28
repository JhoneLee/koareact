/*
* @Author: liyunjiao
* @Date:   2017-06-08 10:47:41
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-06-08 10:52:25
*/
import koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import session from 'koa-session';
import compress from 'koa-compress';
import convert from 'koa-convert';

const app = new koa();

app.keys = ['this is a koa key'];
app.use(convert(session(app)));
app.use(compress());
app.use(bodyParser());
app.use(json());
app.use(logger());

export default app;