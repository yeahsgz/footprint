/*盒子上*/
/*定义flex的兼容写法*/
.fb {
  display : -webkit-box;
  display : -webkit-flex;
  display : flex;
}

/*主轴方向*/
/*从左到右*/
.fb-row {
  -webkit-box-orient     : horizontal;
  -webkit-box-direction  : normal;
  -webkit-flex-direction : row;
  flex-direction         : row;
}

/*从右到左*/
.fb-row-reverse {
  -webkit-box-pack       : end;
  -webkit-box-orient     : horizontal;
  -webkit-box-direction  : reverse;
  -webkit-flex-direction : row-reverse;
  flex-direction         : row-reverse;
}

/*从上到下*/
.fb-col {
  -webkit-box-orient     : vertical;
  -webkit-box-direction  : normal;
  -webkit-flex-direction : column;
  flex-direction         : column;
}

/*从下到上*/
.fb-col-reverse {
  -webkit-box-pack       : end;
  -webkit-box-orient     : vertical;
  -webkit-box-direction  : reverse;
  -webkit-flex-direction : column-reverse;
  flex-direction         : column-reverse;
}

/*主轴对齐方式*/
/*start对齐*/
/*默认start对齐*/
.fb-justify-start {
  -webkit-box-pack        : start;
  -webkit-justify-content : flex-start;
  justify-content         : flex-start;
}

/*end对齐*/
.fb-justify-end {
  -webkit-box-pack        : end;
  -webkit-justify-content : flex-end;
  justify-content         : flex-end;
}

/*center对齐*/
.fb-justify-center {
  -webkit-box-pack        : center;
  -webkit-justify-content : center;
  justify-content         : center;
}

/*两端对齐*/
.fb-justify-between {
  -webkit-box-pack        : justify;
  -webkit-justify-content : space-between;
  justify-content         : space-between;
}

/*两侧相等,一些老的不支持,所以不支持老的写法，不要使用*/
.fb-justify-around {
  -webkit-justify-content : space-around;
  justify-content         : space-around;
}

/*交叉轴对齐方式*/
/*顶部对齐*/
.fb-align-start {
  -webkit-box-align   : start;
  -webkit-align-items : flex-start;
  align-items         : flex-start;
}

/*底部对齐*/
.fb-align-end {
  -webkit-box-align   : end;
  -webkit-align-items : flex-end;
  align-items         : flex-end;
}

/*上下基线对齐*/
.fb-align-baseline {
  -webkit-box-align   : baseline;
  -webkit-align-items : baseline;
  align-items         : baseline;
}

/*上下居中*/
.fb-align-center {
  -webkit-box-align   : center;
  -webkit-align-items : center;
  align-items         : center;
}

/*上下对齐并铺满*/
.fb-align-stretch {
  -webkit-box-align   : stretch;
  -webkit-align-items : stretch;
  align-items         : stretch;
}

/*子元素上*/

/*实现均分*/
.fi {
  display          : block;
  -webkit-box-flex : 1;
  -webkit-flex     : 1;
  flex             : 1;
  width            : 1px;
}

/*允许放大*/
.fi-grow {
  display           : block;
  -webkit-box-flex  : 1; /*老版语法只有这一个*/
  -webkit-flex-grow : 1;
  flex-grow         : 1; /*默认为0 ，不允许放大*/
}

/*允许收缩*/
.fi-shrink {
  display             : block;
  -webkit-box-flex    : 1;
  -webkit-flex-shrink : 1;
  flex-shrink         : 1; /*默认为1 允许收缩*/
}

/*不允许收缩*/
.fi-no-shrink {
  display             : block;
  -webkit-box-flex    : 0;
  -webkit-flex-shrink : 0;
  flex-shrink         : 0;
}

/*排序*/
.fi-order-0 {
  display                   : block;
  -webkit-box-ordinal-group : 0; /*默认1 越小越前*/
  -webkit-order             : 0;
  order                     : 0; /*默认0*/
}