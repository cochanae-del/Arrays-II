Create a function called `findElement`. This function should take two parameters:

- words - an array of strings
- word - a single word (the we're searching for)

The function should return a boolean value of true if the `word` exists in the array of `words`. It should return false if the word is not part of the array (or if the array is empty).

For example:

```
var words = ["hello", "world", "foo", "bar"];
```

```
`findElement`(words, "foo");  // Will return true
```

```
var words = ["hello", "world", "foo", "bar"];
```

```
`findElement`(words, "hi");  // Will return false
```

