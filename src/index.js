module.exports = function check(str, bracketsConfig) {

  const openBrackets = bracketsConfig.map((item) => item[0]);

  const pairsBrackets = bracketsConfig.reduce((dict, item) => {
    dict[item[0]] = item[1];
    return dict;
  }, {})

  const stack = [];

  for (let s of str) {  

    if (openBrackets.includes(s)) {
      stack.push(s);

      if ((stack[stack.length-1] === stack[stack.length-2]) && (openBrackets.includes(pairsBrackets[stack[stack.length-1]]))) {
        stack.pop();
        stack.pop();
      }

    } else {
        if (stack.length === 0) {
          return false;
        }

        let lastElement = stack[stack.length-1];

        if (pairsBrackets[lastElement] === s) {
          stack.pop();

        } else {
          return false;
        }
      }
    }

  return stack.length === 0;
}




