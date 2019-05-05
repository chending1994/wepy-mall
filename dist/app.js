'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      "pages": ["pages/home", "pages/category", "pages/cart", "pages/me"],
      "window": {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#ff2d4a",
        "navigationBarTitleText": "优购",
        "navigationBarTextStyle": "white",
        "enablePullDownRefresh": true,
        "onReachBottomDistance": 50,
        "backgroundColor": "#eee"
      },
      "tabBar": {
        "list": [{
          "pagePath": "pages/home",
          "text": "首页",
          "iconPath": "image/images/icon_home@3x.png",
          "selectedIconPath": "image/images/icon_home_active@3x.png"
        }, {
          "pagePath": "pages/category",
          "text": "分类",
          "iconPath": "image/images/icon_category@3x.png",
          "selectedIconPath": "image/images/icon_category_active@3x.png"
        }, {
          "pagePath": "pages/cart",
          "text": "购物车",
          "iconPath": "image/images/icon_cart@3x.png",
          "selectedIconPath": "image/images/icon_cart_active@3x.png"
        }, {
          "pagePath": "pages/me",
          "text": "我的",
          "iconPath": "image/images/icon_me@3x.png",
          "selectedIconPath": "image/images/icon_me_active@3x.png"
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsIndlcHkiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWdERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBN0NmQSxNQTZDZSxHQTdDTjtBQUNQLGVBQVEsQ0FDTixZQURNLEVBRU4sZ0JBRk0sRUFHTixZQUhNLEVBSU4sVUFKTSxDQUREO0FBT1AsZ0JBQVM7QUFDUCwrQkFBc0IsT0FEZjtBQUVQLHdDQUFnQyxTQUZ6QjtBQUdQLGtDQUEwQixJQUhuQjtBQUlQLGtDQUF5QixPQUpsQjtBQUtQLGlDQUF5QixJQUxsQjtBQU1QLGlDQUF5QixFQU5sQjtBQU9QLDJCQUFtQjtBQVBaLE9BUEY7QUFnQlAsZ0JBQVU7QUFDUixnQkFBUSxDQUFDO0FBQ1Asc0JBQVksWUFETDtBQUVQLGtCQUFRLElBRkQ7QUFHUCxzQkFBWSwrQkFITDtBQUlQLDhCQUFvQjtBQUpiLFNBQUQsRUFLTjtBQUNBLHNCQUFZLGdCQURaO0FBRUEsa0JBQVEsSUFGUjtBQUdBLHNCQUFZLG1DQUhaO0FBSUEsOEJBQW9CO0FBSnBCLFNBTE0sRUFVTjtBQUNBLHNCQUFZLFlBRFo7QUFFQSxrQkFBUSxLQUZSO0FBR0Esc0JBQVksK0JBSFo7QUFJQSw4QkFBb0I7QUFKcEIsU0FWTSxFQWVOO0FBQ0Esc0JBQVksVUFEWjtBQUVBLGtCQUFRLElBRlI7QUFHQSxzQkFBWSw2QkFIWjtBQUlBLDhCQUFvQjtBQUpwQixTQWZNO0FBREE7QUFoQkgsS0E2Q007QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIYTtBQUlkOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRU1DLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRGMscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pKLGVBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCaUIsSUFBSWpCLFFBQS9CO0FBQ0FZLGdCQUFNQSxHQUFHSyxJQUFJakIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBaEYwQmMsZUFBS0ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgXCJwYWdlc1wiOltcbiAgICAgIFwicGFnZXMvaG9tZVwiLFxuICAgICAgXCJwYWdlcy9jYXRlZ29yeVwiLFxuICAgICAgXCJwYWdlcy9jYXJ0XCIsXG4gICAgICBcInBhZ2VzL21lXCJcbiAgICBdLFxuICAgIFwid2luZG93XCI6e1xuICAgICAgXCJiYWNrZ3JvdW5kVGV4dFN0eWxlXCI6XCJsaWdodFwiLFxuICAgICAgXCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmMmQ0YVwiLFxuICAgICAgXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6IFwi5LyY6LStXCIsXG4gICAgICBcIm5hdmlnYXRpb25CYXJUZXh0U3R5bGVcIjpcIndoaXRlXCIsXG4gICAgICBcImVuYWJsZVB1bGxEb3duUmVmcmVzaFwiOiB0cnVlLFxuICAgICAgXCJvblJlYWNoQm90dG9tRGlzdGFuY2VcIjogNTAsXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWVcIlxuICAgIH0sXG4gICAgXCJ0YWJCYXJcIjoge1xuICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9ob21lXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIummlumhtVwiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2UvaW1hZ2VzL2ljb25faG9tZUAzeC5wbmdcIixcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2UvaW1hZ2VzL2ljb25faG9tZV9hY3RpdmVAM3gucG5nXCJcbiAgICAgIH0se1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvY2F0ZWdvcnlcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5YiG57G7XCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZS9pbWFnZXMvaWNvbl9jYXRlZ29yeUAzeC5wbmdcIixcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2UvaW1hZ2VzL2ljb25fY2F0ZWdvcnlfYWN0aXZlQDN4LnBuZ1wiXG4gICAgICB9LHtcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2NhcnRcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6LSt54mp6L2mXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZS9pbWFnZXMvaWNvbl9jYXJ0QDN4LnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZS9pbWFnZXMvaWNvbl9jYXJ0X2FjdGl2ZUAzeC5wbmdcIlxuICAgICAgfSx7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9tZVwiLFxuICAgICAgICBcInRleHRcIjogXCLmiJHnmoRcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlL2ltYWdlcy9pY29uX21lQDN4LnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZS9pbWFnZXMvaWNvbl9tZV9hY3RpdmVAM3gucG5nXCJcbiAgICAgIH1dXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICB0aGlzLnRlc3RBc3luYygpXG4gIH1cblxuICBzbGVlcCAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICB9LCBzICogMTAwMClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==