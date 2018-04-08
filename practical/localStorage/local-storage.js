;(function () {
    try {
        for (var i in localStorage) {
            if (typeof localStorage[i] === 'function') {

                localStorage[i] = (function (methodCatch) {
                    return function () {
                        var args = [].slice.apply(arguments);
                        try {
                            console.log('我是替换了的哦');
                            methodCatch.apply(localStorage, args)
                        } catch (e) {
                            console.log('设备不支持:',e)
                        }
                    }
                })(localStorage[i])

            }
        }
    } catch (e) {
        console.log('不支持替换:', e);
    }
})();