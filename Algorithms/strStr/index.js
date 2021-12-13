const strStr = (haystack, needle) => {
  if (needle == '') return 0

  const prefixTable = buildPrefixTable(needle)
  let i = 0
  let j = 0

  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else if (j > 0) {
      j = prefixTable[j - 1]
    } else {
      i++
    }
  }
  return j === needle.length ? i - j : -1
}

const buildPrefixTable = str => {
  const table = [0]

  let i = 1
  let j = 0

  while (i < str.length) {
    if (str[i] === str[j]) {
      j++
      table[i] = j
      i++
    } else if (j > 0) {
      j = table[j - 1]
    } else {
      table[i] = 0
      i++
    }
  }

  return table
}
