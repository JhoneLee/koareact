/*
* @Author: liyunjiao
* @Date:   2017-06-08 11:09:25
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-06-08 11:13:21
*/
import fs from 'fs';
import path from 'path';
import Router from 'koa-router';
const router = new Router({prefix:'/api'});
let subRouter;
fs.readdirSync(__dirname).filter(filename=>{
    filename !== path.basename(__filename);
}).forEach(filename=>{
    subRouter = require(`./${filename}`);
    router.use(subRouter.routes(),subRouter.allowMethods());
});
export default router;