// test just function (it's work)
function capitalize(string) {
    return string
        .split('')
        .reduce((capitalized, char, index, stringArray) => {
            if (index === 0 || stringArray[index - 1] === ' ') {
                return [...capitalized, char.toUpperCase()];
            } else {
                return [...capitalized, char];
            }
        }, [])
        .join('');
}

export default capitalize;