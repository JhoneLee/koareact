/*
* @Author: liyunjiao
* @Date:   2017-06-08 11:08:18
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-06-08 11:08:37
*/
async function getUserInfo(ctx) {
    ctx.body = {
        name: 'Chikara Chan',
        gender: 'male',
        age: 20
    }
}

export default {getUserInfo}