/**
 * @author zhaoshuai
 * @email  1095024601@qq.com
 * @createTime 2017-09-15
 * @lastEditTime 2017-09-15
 * @desc
 */
(function (global) {
    var throttleTime = 200, stickyQueue = [];

    var setDefaultVal = function (val, defaultVal) {
        return isExist(val) ? val : defaultVal;
    };

    var isExist = function (val) {
        return val != null;
    };

    var isArray = function () {
        return protoString(val, 'Array');
    };

    var isObj = function (val) {
        return protoString(val, 'Object');
    };

    var protoString = function (val, type) {
        return Object.prototype.toString.call(val) === '[object ' + type + ']';
    };

    //创建占位
    var createPlaceholder = function ($el) {
        var height = $el.height();
        $el.wrap('<div style="position:relative;height:' + height + 'px"></div>')
    };

    var initConf = function (conf) {
        if (!isObj(conf)) {
            return void console.error(JSON.stringify(conf), '：不合法');
        }
        if (!conf.el) {
            return void console.error('请绑定触发元素');
        }
        conf.top = setDefaultVal(conf.top, 0);
        conf.offsetTop = setDefaultVal(conf.offsetTop, conf.top);
        conf.compute = setDefaultVal(conf.compute, false);
        conf.zIndex = setDefaultVal(conf.zIndex, 1001);
        return conf;
    };

    $(window).on('scroll', function () {
        var $this = $(this);
        var scrollTop = $this.scrollTop();
        stickyQueue.forEach(function (v, i) {
            if (v.compute) {
                v.scrollTop = v.el.offset().top;
            }
            if (v.scrollTop + v.offsetTop >= scrollTop) {
                v.el.css({
                    position: 'fixed',
                    top: v.top
                })
            } else {
                v.el.css({
                    position: 'static',
                    top: '0'
                })
            }
        })
    });

    /**
     *
     * @param conf     {Object|Array}
     *                  {
     *                      el                 $对象，not empty
     *                      top                默认:0。固定位置距离顶部的距离
     *                      offsetTop          默认:0（top值）。距离顶部多少时开启固定定位。与top保持一致才不会出现 ‘闪一下’的情况
     *                      compute            默认:false。是否实时计算高度。比如ajax填充数据后，导致sticky出现时机改变，开启过后能避免这个问题。注意：实时计算会影响性能
     *                      zIndex             默认:1001。当遇到丧心病狂的设置得非常高的z-index时，不要犹豫，超过他！
     *                  }
     * @param timer    {Number}               默认值：200。触发的间隔时间 ，后面的会覆盖
     */
    var sticky = function (conf, timer) {
        throttleTime = setDefaultVal(timer, 200);

        var stickyConf;
        if (isArray(conf)) {
            for (var i = 0, l = conf.length; i < l; i++) {
                stickyConf = initConf(conf[i]);
                stickyConf && stickyQueue.push(stickyConf);
            }
        } else {
            stickyConf = initConf(conf);
            stickyConf && stickyQueue.push(stickyConf);
        }
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = sticky;
        }
        exports.sticky = sticky;
    } else {
        global.sticky = sticky;
    }
})(this);
