(function () {
  require('../src');

  // /^(.)\1+$/.test(pw)
  describe('api.basic test', () => {
    test('nx.isPalindrome is not equal', function () {
      var str1 = '1';
      var str2 = '12';
      var str3 = '333';
      var str3 = '4444';

      expect(nx.isPalindrome(str1)).toBe(false);
      expect(nx.isPalindrome(str2)).toBe(false);
      expect(nx.isPalindrome(str3)).toBe(false);
    });

    test('nx.isPalindrome std equal', function () {
      var str1 = '121';
      var str2 = '1221';
      var str3 = '22322';

      expect(nx.isPalindrome(str1)).toBe(true);
      expect(nx.isPalindrome(str2)).toBe(true);
      expect(nx.isPalindrome(str3)).toBe(true);
    });
  });
})();
