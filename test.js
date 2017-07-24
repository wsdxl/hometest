// let promiseCleanRoom = new Promise(function (resolve, reject) {
//     let isClean = true;
//     if (isClean) {
//         resolve('yes is clean')
//     } else {
//         reject('not clean')
//     }
// })

// promiseCleanRoom.then(function (fromresolve) {
//     console.log(fromresolve);
// }).catch(function (fromreject) {
//     console.log(fromreject);
// })

function imgLoad(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(new Error('图片加载失败:' + request.statusText));
            }
        };
        request.onerror=function(){
            reject(new Error('网络错误'));
        };
        request.send();
    });
}

imgLoad('http://dn-cnode.qbox.me/FlwW5i2h_UuKpnBXXvD3AqyrwjHP').then((status)=>{
    console.log(status);
})