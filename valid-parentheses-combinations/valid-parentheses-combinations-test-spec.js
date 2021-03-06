describe ('Valid Parentheses Combinations', function() {

    it('returns an array containing an empty string when n=0', function() {
        expect(validParentheses(0)).toEqual(['']);
    });

    it('returns the correct array when n=1', function() {
        expect(validParentheses(1)).toEqual(['()']);
    });

    it('returns the correct array when n=5', function() {
        expect(validParentheses(5)).toEqual([
          '((((()))))',
          '(((()())))',
          '(((())()))',
          '(((()))())',
          '(((())))()',
          '((()(())))',
          '((()()()))',
          '((()())())',
          '((()()))()',
          '((())(()))',
          '((())()())',
          '((())())()',
          '((()))(())',
          '((()))()()',
          '(()((())))',
          '(()(()()))',
          '(()(())())',
          '(()(()))()',
          '(()()(()))',
          '(()()()())',
          '(()()())()',
          '(()())(())',
          '(()())()()',
          '(())((()))',
          '(())(()())',
          '(())(())()',
          '(())()(())',
          '(())()()()',
          '()(((())))',
          '()((()()))',
          '()((())())',
          '()((()))()',
          '()(()(()))',
          '()(()()())',
          '()(()())()',
          '()(())(())',
          '()(())()()',
          '()()((()))',
          '()()(()())',
          '()()(())()',
          '()()()(())',
          '()()()()()' ]);
   });


});
