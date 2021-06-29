(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var SAME_CHAR_RE = /^(.)\1+$/;

  nx.isPalindrome = function (inString) {
    var str = String(inString);
    if (str.length < 3) return false;
    if (SAME_CHAR_RE.test(str)) return false;
    if (str.split('').reverse().join('') === str) return true;
    return false;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPalindrome;
  }
})();
