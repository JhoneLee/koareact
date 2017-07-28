/*
* @Author: liyunjiao
* @Date:   2017-06-08 11:13:55
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-06-08 11:14:02
*/

import Router from 'koa-router'
import user from '../controllers/user'

const router = new Router({prefix: '/user'})

router.get('/getUserInfo', user.getUserInfo)

export default router