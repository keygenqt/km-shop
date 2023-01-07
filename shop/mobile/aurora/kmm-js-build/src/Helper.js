export const Helper = {
    getCaller: function () {
        try {
            throw new Error();
        } catch (e) {
            const allMatches = e.stack.match(/(\w+)@|at (\w+) \(/g);
            const parentMatches = allMatches[2].match(/(\w+)@|at (\w+) \(/);
            return parentMatches[1] || parentMatches[2];
        }
    }
}