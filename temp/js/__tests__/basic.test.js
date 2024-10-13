"use strict";

var _Sorter = _interopRequireDefault(require("../Sorter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('Check sort', function () {
  var obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
  };
  test('sort checker', function () {
    expect((0, _Sorter["default"])(obj, ["name", "level"])).toEqual([{
      key: 'name',
      value: 'мечник'
    }, {
      key: 'level',
      value: 2
    }, {
      key: 'attack',
      value: 80
    }, {
      key: 'defence',
      value: 40
    }, {
      key: 'health',
      value: 10
    }]);
  });
});