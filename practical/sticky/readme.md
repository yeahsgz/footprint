滑动吸顶组件，一依赖于JQ，不兼容ie8
使用方式如下
sticky([
        {
            el: $('header'),
            zIndex: 1002
        }, {
            el: $('.section'),
            top: 80
        }
    ]);

                           el                 $对象，not empty
                           top                默认:0。固定位置距离顶部的距离
                           fixedTop           默认:0（top值）。距离顶部多少时开启固定定位。与top保持一致才不会出现 ‘闪一下’的情况
                           zIndex             默认:1001。当遇到丧心病狂的设置得非常高的z-index时，不要犹豫，干翻他！
