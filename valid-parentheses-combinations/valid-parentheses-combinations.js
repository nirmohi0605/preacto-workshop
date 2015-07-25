function validParentheses(n) {
	var answer = [];

	function getCombinations(open, close, curr) {
		debugger;
		if (open === 0 && close === 0)
			answer.push(curr);
		if (open > 0) {
			getCombinations(open - 1, close + 1, curr + '(');
		}

		if (close > 0) {
			getCombinations(open, close - 1, curr + ')');
		}
	}
	getCombinations(n, 0, '');
	return answer;
}