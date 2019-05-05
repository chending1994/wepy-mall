'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = 'http://localhost:8888/api/public/v1/';

exports.default = function () {
  var pramas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return _wepy2.default.request({
    url: '' + baseUrl + pramas.url
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsiYmFzZVVybCIsInByYW1hcyIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxzQ0FBaEI7O2tCQUNpQixZQUFnQjtBQUFBLE1BQWZDLE1BQWUsdUVBQU4sRUFBTTs7QUFDL0IsU0FBT0MsZUFBS0MsT0FBTCxDQUFhO0FBQ2xCQyxjQUFRSixPQUFSLEdBQWtCQyxPQUFPRztBQURQLEdBQWIsQ0FBUDtBQUdELEMiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4ODg4L2FwaS9wdWJsaWMvdjEvJ1xuZXhwb3J0IGRlZmF1bHQgICgocHJhbWFzID0ge30pPT4ge1xuICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAke2Jhc2VVcmx9JHtwcmFtYXMudXJsfWBcbiAgfSlcbn0pIl19