var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var js_div_selector = document.querySelector("div");
console.log(js_div_selector);
var js_div_selector_all = document.querySelectorAll("div");
console.log(js_div_selector_all);
var js_p_1 = document.getElementById("js-p-1");
console.log(js_p_1);
var js_p_2 = document.getElementById("js-p-2");
console.log(js_p_2);
var js_label = document.querySelectorAll("label");
var js_btn_1 = document.getElementById("js-btn-1");
var btn2 = document.getElementById("js-btn-2");
var js_input_1 = document.getElementById("js-input-1");
var colorAry = ["#FFD489", "#FFB64D", "#FFE543", "#C3FF43", "#82FF43", "#43FFAA", "#5FFAFF", "#5FBDFF", "#5F6DFF"];
var url = "https://weather.tsukumijima.net/api/forecast/city/";
var bg = document.getElementById("js-submit-2");
var js_div_3 = document.getElementById("js-div-8");
var js_btn_4 = document.getElementById("js-btn-4");
var randomColor = function () {
    var i = Math.floor(Math.random() * (colorAry.length + 1));
    return colorAry[i];
};
var changeBgCol = function () {
    bg.style.backgroundColor = randomColor();
};
var displayJsonData = function (resJson) { return __awaiter(_this, void 0, void 0, function () {
    var param1, param2, loc, weather;
    return __generator(this, function (_a) {
        param1 = document.createElement("p");
        param2 = document.createElement("p");
        loc = resJson.location;
        weather = resJson.forecasts[0].detail;
        param1.textContent = "\u5834\u6240 : " + (loc.area + " " + loc.city + " " + loc.district);
        js_div_3.appendChild(param1);
        param2.textContent = "\u5929\u6C17 : " + weather.weather;
        js_div_3.appendChild(param2);
        console.log(resJson.location);
        return [2 /*return*/];
    });
}); };
var displayBody = function () { return __awaiter(_this, void 0, void 0, function () {
    var cityId, res, resJson, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                cityId = "017010";
                return [4 /*yield*/, fetch("" + url + cityId)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                resJson = _a.sent();
                console.log(resJson);
                return [4 /*yield*/, displayJsonData(resJson)];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
btn2.addEventListener("click", changeBgCol);
js_btn_4.addEventListener("click", displayBody);
