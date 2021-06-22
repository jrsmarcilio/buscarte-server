"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

_app2.default.listen(port, () => {
  console.log(`\nServer running at http://${hostname}:${port}`);
});
