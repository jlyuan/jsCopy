// dev1

var copy = {
    // 深拷贝
    deepCopy: function (obj1) {
        var obj2 = Array.isArray(obj1) ? [] : {};
        if (obj1 && typeof obj1 === "object") {
            for (var i in obj1) {
                if (obj1.hasOwnProperty(i)) {
                    if (obj1[i] && typeof obj1[i] === "object") {
                        obj2[i] = deepCopy(obj1[i]);
                    } else {
                        obj2[i] = obj1[i];
                    }
                }
            }
        }
        return obj2;
    },
    // 浅拷贝
    copy:function (obj1) {
       var obj2 = Array.isArray(obj1) ? [] : {};
       for (let i in obj1) {
       obj2[i] = obj1[i];
      }
       return obj2;
    }
}
module.exports = copy