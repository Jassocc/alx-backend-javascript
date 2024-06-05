// accepts 3 args and does basic amth
const calculateNumber = (type, a, b) => {
  switch (type) {
    case 'SUM':
      res = Math.round(a) + Math.round(b);
      return res;
    case 'SUBTRACT':
      res = Math.round(a) - Math.round(b);
      return res;
    case 'DIVIDE':
      if (Math.round(b) === 0) {
        return 'Error';
      } else {
        res = Math.round(a) / Math.round(b);
        return res;
      }
    default:
      throw new Error('Invalid type');
  }
};
module.exports = calculateNumber;
