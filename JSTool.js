
// 判断变量类型
function type(obj){
	return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
};

// 限制文本字数
function limitStr(str, length) {
    var words = str.split('');
    words.splice(length, words.length-1);
    return words.join('') + (words.length !== str.split('').length ? '…' : '');
};

// 判断当前处于哪一个屏幕适配度下       
function isBreakPoint(bp) {
    //css中的断点
    var bps = [320, 480, 768, 1024, 1366, 1440, 1600 ,1920];
    var w = window.innerWidth;
    var min, max;
    for (var i = 0; i < bps.length; i++) {
        if (bps[i] === bp) {
            min = bps[i-1] || 0;
            max = bps[i];
            break;
        }
    }
    return w > min && w <= max;
};

// 数组去重
function arrRemoveRepeat(arr){
    var json = {};
    var newarr = [];

    for (var i = 0; i<arr.length; i++) {
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            newarr.push(arr[i]);
        };
    };

    return newarr;
};

// 判断是否为空对象
function isEmptyObject(obj) {
    var name;
    for ( name in obj ) {
        return false;
    };
    return true;
};

// 找出数组中的最大值和最小值，并找出他们的位置
function searchMax (arr){
    var max = -Infinity;
    var index = 0;

    for (var i = 0; i <arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i];
            index = i+1;
        };
    };

    return max+':'+index;
}

function searchMin(arr){
    var min = Infinity;
    var index = 0;

    for (var i =0; i<arr.length; i++) {
        if (arr[i]<min) {
            min = arr[i];
            index = i+1;
        };
    };

    return min+':'+index;
};

// 找出字符串中每一项出现的次数以及出现最多的那一项的次数

function searchSum(str){
    var obj = {};
    var key = '';
    var num = 0;

    for (var i = 0; i <str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
        }else{
            obj[str[i]] ++;
        };
    };

    for (var attr in obj) {
        if (obj[attr]>num) {
            num = obj[attr];
            key = attr;
        };
    };
    return key+':'+num;
};

// 将类数组转化成数组

function toArr(obj){
    var arr = Array.prototype.slice.call(obj);
    return arr;
};

// 计算字符串字符长度

function countLength(str){
    var num = 0;
    for (var i = 0; i <str.length; i++) {           
        if (/[\u4e00-\u9fa5]/.test(str[i])) {
            num +=2;
        }else{
            num++;
        };
    };
    return num;
};

// 深度克隆

function Clone(obj){
    var o;
    switch(obj){
        case "undefined":
        o = obj;
        case "number":
        o = obj;
        case "string":
        o = obj;
        case "boolean":
        o = obj;
        case "object":
        if (obj === null) {
            o === null;
        }else{
            if (Object.prototype.toString.call(obj).slice(8,-1) === 'Array') {
                    o = [];
                    for (var i = 0; i <obj.length; i++) {
                        o.push(Clone(obj[i]));
                    };
            }else{
                    o = {};
                    for (var attr in obj) {
                        o[attr] = Clone(obj[attr]);
                    };
            };
        };
        break;
        default:
        o = obj;
        break;
    }
    return o;
 }

// 去除字符串空白字符
function trim(str, trimMode) {
    switch (trimMode) {
        case 'left':
        return str.replace(/(^\s+)/g, '');
        case 'right':
        return str.replace(/(\s+$)/g, '');
        case 'all':
        return str.replace(/(^\s+)|\s|(\s+$)/g, '');
        default:
        return str.replace(/(^\s+)|(\s+$)/g, '');
    };
};

// 快速排序
function quicksort(arr){
     if (arr.length <=1 ) {
       return arr;
     };

     var pivotindex = Math.floor(arr.length/2);
     var pivot = arr.splice(pivotindex,1)[0];
     var left = [];
     var right = [];

     for (var i = 0; i <arr.length; i++) {
       if (arr[i]<pivot) {
         left.push(arr[i]);
       }else{
         right.push(arr[i]);
       };
     };
     
     return quicksort(left).concat([pivot],quicksort(right));
}



