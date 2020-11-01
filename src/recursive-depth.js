const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth= 1) {
    let sub_arrays = arr.filter(a => Array.isArray(a));
    return sub_arrays.length ? this.calculateDepth(sub_arrays.flat(), depth + 1) : depth;
  }
};
