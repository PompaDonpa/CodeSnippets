# strStr

### Return the index of the first occurrence of needle in haystack, or `-1` if `needle` is not part of `haystack`.

<br />

`Clarification:`
<br />

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to <kbd>C's</kbd> `strstr()` and <kbd>Java's</kbd> `indexOf()`.

<br />


`Example 1`:

```go
Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:
```

```go
Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:
```

```go
Input: haystack = "", needle = ""
Output: 0
```

<br />

`Constraints`:

```go
0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
```

<hr />


<br />

### [Solution](https://github.com/PompaDonpa/CodeSnippets/blob/main/Algorithms/strStr/index.js)

<br />

```javascript
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
```