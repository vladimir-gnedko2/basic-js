module.exports = function createDreamTeam(members) {
    return Array.isArray(members)
      ? members
          .filter((e) => typeof e === 'string')
          .map((e) =>
            e.replace(e, (str) =>
              str.replace(str, (symbol) =>
                symbol
                  .match(/[^\s\d]+/)[0]
                  .charAt(0)
                  .toUpperCase()
              )
            )
          )
          .sort()
          .join(``)
      : false
}  