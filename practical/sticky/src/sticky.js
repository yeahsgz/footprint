/**
 * @author zhaoshuai
 * @email  1095024601@qq.com
 * @createTime 2017-09-15
 * @lastEditTime 2018-08-23
 * @desc
 */
!(function (global) {
    var stickyQueue = [];
    
    var setDefaultVal = function (val, defaultVal) {
        return isExist(val) ? val : defaultVal;
    };
    
    var isExist = function (val) {
        return val != null;
    };
    
    var isArray = function (val) {
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
        conf.fixedTop = setDefaultVal(conf.fixedTop, conf.top);
        conf.compute = setDefaultVal(conf.compute, false);
        conf.zIndex = setDefaultVal(conf.zIndex, 1001);
        conf.offsetTop = setDefaultVal(conf.el.offset().top, 0);
        
        createPlaceholder(conf.el);
        conf.el.css({
            position: 'absolute',
            top: '0',
            width: '100%'
        })
        return conf;
    };
    
    var scrollHandle = function () {
        var scrollTop = $(window).scrollTop();
        stickyQueue.forEach(function (v) {
            if (v.compute) {
                v.offsetTop = v.el.parent().offset().top;
            }
            if (scrollTop > v.offsetTop - v.fixedTop) {
                v.el.css({
                    position: 'fixed',
                    top: v.top,
                    zIndex: v.zIndex
                })
            } else {
                v.el.css({
                    position: 'absolute',
                    top: '0'
                })
            }
        })
    }
    
    $(window).on('scroll', scrollHandle);
    scrollHandle() //自执行一次
    /**
     *
     * @param conf     {Object|Array}
     *                  {
     *                      el                 $对象，not empty
     *                      top                默认:0。固定位置距离顶部的距离
     *                      fixedTop           默认:0（top值）。距离顶部多少时开启固定定位。与top保持一致才不会出现 ‘闪一下’的情况
     *                      compute            默认:false。是否实时计算高度。比如ajax填充数据后，导致sticky出现时机改变，开启过后能避免这个问题。注意：实时计算会影响性能
     *                      zIndex             默认:1001。当遇到丧心病狂的设置得非常高的z-index时，不要犹豫，干翻他！
     *                  }
     */
    var sticky = function (conf) {
        
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
})(window);
