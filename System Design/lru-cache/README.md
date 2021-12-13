#   LRU Cache

### Design a data structure that follows the constraints of a ***Least Recently Used (LRU) cache***.

-   Implement the `LRUCache` class:
    -   **LRUCache(int capacity)** Initialize the LRU cache with positive size capacity.
    -   **int get(int key)** Return the value of the `key` if the key exists, otherwise return `-1`.
    -   **void put(int key, int value)** Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the `cache`. If the number of keys exceeds the `capacity` from this operation, ***evict*** the least recently used key.

    <br />

-   The functions get and put must each run in `O(1)` average time complexity.

<br />

`Example 1:`
<br />

`Input`

```go
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]

[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
```

`Output`

```go
[null, null, null, 1, null, -1, null, -1, 3, 4]
```

<br />

`Explanation`
```go
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
```
<br />

`Constraints:`

```go
1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.
```
<hr />


<br />

### [Solution](https://github.com/PompaDonpa/CodeSnippets/blob/main/System%20Design/lru-cache/index.js)

<br />


```javascript
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * @param {number} capacity
 */

class LRUCache {
  constructor (capacity) {
    this.map = {}
    this.list = new DoublyLinkedList()
    this.capacity = capacity
    this.size = 0
  }

  get (key) {
    if (!this.map[key]) return -1

    const current = this.map[key]
    this.list.move2Front(current)
    return current.value
  }

  put (key, value) {
    if (this.map[key]) {
      const current = this.map[key]
      current.value = value
      this.list.move2Front(current)
      return
    }

    if (this.size === this.capacity) {
      const lastNode = this.list.removeLast()
      delete this.map[lastNode.key]
      this.size--
    }

    const newNode = new ListNode(key, value)
    this.map[key] = newNode
    this.list.add(newNode)
    this.size++
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = new ListNode()
    this.tail = new ListNode()
    this.connect(this.head, this.tail)
  }

  add (node) {
    this.connect(node, this.head.next)
    this.connect(this.head, node)
  }

  move2Front (node) {
    this.delete(node)
    this.add(node)
  }

  removeLast () {
    const last = this.tail.prev
    this.delete(last)
    return last
  }

  delete (node) {
    this.connect(node.prev, node.next)
  }

  connect (node1, node2) {
    node1.next = node2
    node2.prev = node1
  }
}

class ListNode {
  constructor (key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}
```