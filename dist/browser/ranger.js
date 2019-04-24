var Ranger = /** @class */ (function () {
    function Ranger() {
    }
    Ranger.init = function (str) {
        var result = Ranger.parser(str);
        if (result)
            return Ranger.createArray(result);
        return;
        false;
    };
    Ranger.parser = function (str) {
        var p = str.split(":");
        if (p.length === 1)
            return false;
        var obj = {
            start: p[0],
            end: p[1],
            step: 1
        };
        if (p.length === 3)
            obj.step = parseFloat(p[2]);
        return obj;
    };
    Ranger.createArray = function (obj) {
        var arr = [];
        var start = parseFloat(obj.start);
        var end = parseFloat(obj.end);
        var step = parseFloat(obj.step);
        var i = start;
        if (start < end) {
            for (i; i <= end; i += step) {
                arr.push(i);
            }
        }
        else {
            for (i; i >= end; i -= step) {
                arr.push(i);
            }
        }
        return arr;
    };
    return Ranger;
}());
