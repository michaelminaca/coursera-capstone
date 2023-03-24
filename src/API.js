const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};
const API_FUNCS = {
  fetchAPI: function (date) {
    let result = [];
    let random = seededRandom(Date.parse(date));

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  },
  submitAPI: function (formData) {
    return true;
  },
};

export default API_FUNCS;
