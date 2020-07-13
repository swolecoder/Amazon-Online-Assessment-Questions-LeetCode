const generateParenthesis = function (n) {
    let result = [];

    function helper(left, right, builder) {
        if (left > right) return;
        if (!left && !right) result.push(builder);
        if (left > 0) helper(left - 1, right, builder + "(");
        if (right > 0) helper(left, right - 1, builder + ")")
    }
    helper(n, n, "")
    return result

}

console.log(generateParenthesis(3))