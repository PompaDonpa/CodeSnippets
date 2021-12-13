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
