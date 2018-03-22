//简单粗暴的实现
var Fibonacci = function (n) {
    return n < 2 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);
}


//已计算的结果保留缓存，直接取
var Fibonacci=(function (){
    var catchMap=[0,1,1];
    var fibonacci=function(n){
        var result=catchMap[n];
        if(typeof result!=='number'){
           result=catchMap[n]=fibonacci(n-1)+fibonacci(n-2);
        }
        return result
    }
    return fibonacci;
})()