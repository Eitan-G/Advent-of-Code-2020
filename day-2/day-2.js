const cheesyValidate = (string) => {
  const { min, max, char, password } = getGroups(string)
  const sortCharToStart = (a, b) => a === char ? -1 : 1
  const count = password.split("").sort(sortCharToStart).lastIndexOf(char) + 1
  return min <= count && max >= count
}

const lessCheesyValidate = (string) => {
  const { min, max, char, password } = getGroups(string)
  const count = password.match(new RegExp(char, "g"))?.length || 0
  return min <= count && max >= count
}

const saneValidate = (string) => {
  const { min, max, char, password } = getGroups(string)
  let count = 0
  for (const _char of password) {
    if (_char === char) { count++ }
    if (count > max) { return false }
  }
  return count >= min
}

const getGroups = string => {
  const { groups } = string.match(/(?<min>\d+)-(?<max>\d+)\s(?<char>.):\s(?<password>.*)/)
  return {
    char: groups.char,
    password: groups.password,
    min: +groups.min,
    max: +groups.max,
  }
}

const countValidated = (passwords, validation=cheesyValidate) => passwords.filter(validation).length

module.exports = { countValidated }
