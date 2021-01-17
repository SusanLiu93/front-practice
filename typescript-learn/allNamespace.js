// <reference path="printNamespace.ts"/>
var printNamespace;
(function (printNamespace) {
    var strPrint = /** @class */ (function () {
        function strPrint() {
        }
        strPrint.prototype.log = function (str) {
            console.log(str);
        };
        return strPrint;
    }());
    printNamespace.strPrint = strPrint;
})(printNamespace || (printNamespace = {}));
// <reference path="printNamespace.ts" />
var printNamespace;
(function (printNamespace) {
    var listPrint = /** @class */ (function () {
        function listPrint() {
        }
        listPrint.prototype.log = function (str) {
            console.log(str.join('-'));
        };
        return listPrint;
    }());
    printNamespace.listPrint = listPrint;
})(printNamespace || (printNamespace = {}));
// <reference path="printNamespace.ts" />
var printNamespace;
(function (printNamespace) {
    var objPrint = /** @class */ (function () {
        function objPrint() {
        }
        objPrint.prototype.log = function (str) {
            var res = '';
            for (var key in str) {
                if (Object.prototype.hasOwnProperty.call(str, key)) {
                    var element = str[key];
                    res += key + ":" + element + ";";
                }
            }
            console.log(res);
        };
        return objPrint;
    }());
    printNamespace.objPrint = objPrint;
})(printNamespace || (printNamespace = {}));
