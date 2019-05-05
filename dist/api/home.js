'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSwaiperData = undefined;

var getSwaiperData = exports.getSwaiperData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _request2.default)({
              url: 'home/swiperdata'
            });

          case 2:
            res = _context.sent;
            return _context.abrupt('return', res.data.data);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSwaiperData() {
    return _ref.apply(this, arguments);
  };
}();

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsidXJsIiwicmVzIiwiZGF0YSIsImdldFN3YWlwZXJEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxRUFFTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNjLHVCQUFRO0FBQ3pCQSxtQkFBSztBQURvQixhQUFSLENBRGQ7O0FBQUE7QUFDQ0MsZUFERDtBQUFBLDZDQUlFQSxJQUFJQyxJQUFKLENBQVNBLElBSlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWVDLGM7Ozs7O0FBRnRCIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3dhaXBlckRhdGEoKSB7XG4gIGNvbnN0IHJlcyA9ICBhd2FpdCByZXF1ZXN0KHtcbiAgICB1cmw6ICdob21lL3N3aXBlcmRhdGEnLFxuICB9KVxuICByZXR1cm4gcmVzLmRhdGEuZGF0YVxufSAiXX0=