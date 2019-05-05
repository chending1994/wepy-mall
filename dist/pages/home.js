'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _home = require('./../api/home.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      swiperData: [],
      sleepTime: 1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      this.loadSwiper();
      this.loadTime();
    }
  }, {
    key: 'loadSwiper',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _home.getSwaiperData)();

              case 2:
                this.swiperData = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadSwiper() {
        return _ref2.apply(this, arguments);
      }

      return loadSwiper;
    }()
  }, {
    key: 'loadTime',
    value: function loadTime() {
      var _this2 = this;

      setTimeout(function () {
        _this2.sleepTime = 3;
        _this2.$apply();
      }, 3000);
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJzd2lwZXJEYXRhIiwic2xlZXBUaW1lIiwibG9hZFN3aXBlciIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUtuQkMsSSxHQUFPO0FBQ0xDLGtCQUFZLEVBRFA7QUFFTEMsaUJBQVc7QUFGTixLOzs7Ozs2QkFKRTtBQUNQLFdBQUtDLFVBQUw7QUFDQSxXQUFLQyxRQUFMO0FBQ0Q7Ozs7Ozs7Ozs7dUJBT3lCLDJCOzs7QUFBeEIscUJBQUtILFU7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFHSTtBQUFBOztBQUNUSSxpQkFBVyxZQUFLO0FBQ2QsZUFBS0gsU0FBTCxHQUFpQixDQUFqQjtBQUNBLGVBQUtJLE1BQUw7QUFDRCxPQUhELEVBR0UsSUFIRjtBQUlEOzs7O0VBbkIrQkMsZUFBS0MsSTs7a0JBQWxCVCxJO0FBb0JwQiIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IGdldFN3YWlwZXJEYXRhIH0gZnJvbSAgJy4uL2FwaS9ob21lJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdle1xuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMubG9hZFN3aXBlcigpXG4gICAgICB0aGlzLmxvYWRUaW1lKClcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHN3aXBlckRhdGE6IFtdLFxuICAgICAgc2xlZXBUaW1lOiAxXG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZFN3aXBlcigpIHtcbiAgICAgIHRoaXMuc3dpcGVyRGF0YSA9IGF3YWl0IGdldFN3YWlwZXJEYXRhKCk7XG4gICAgICAvLyB0aGlzLiRhcHBseSgpXG4gICAgfVxuICAgIGxvYWRUaW1lKCkge1xuICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgdGhpcy5zbGVlcFRpbWUgPSAzXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sMzAwMClcbiAgICB9XG4gIH07XG4iXX0=