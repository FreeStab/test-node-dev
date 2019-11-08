const parse = (string) => {
    return string.replace(/['_]/g, '')
    .toUpperCase()
    .match(/\b([A-Z])/g)
    .join('');
}

exports.parse = parse
