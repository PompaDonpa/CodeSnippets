function linkedlist () {
  //Node
  let Node = function (elm) {
    this.element = elm
    this.next = null
  }

  //To keep track of the size
  let length = 0

  //To keep track of the list
  let head = null

  //Other methods go here
  //Add new item in the linkedlist
  this.append = function (elm) {
    let node = new Node(elm),
      current

    if (head === null) {
      head = node
    } else {
      current = head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    length++
  }

  //Remove item from any position
  this.removeAt = function (pos) {
    if (pos > -1 && pos < length) {
      let current = head,
        previous,
        index = 0

      if (pos === 0) {
        head = current.next
      } else {
        while (index++ < pos) {
          previous = current
          current = current.next
        }

        previous.next = current.next
      }

      length--
      return current.element
    } else {
      return null
    }
  }

  //Add item at any position
  this.insert = function (pos, elm) {
    if (pos >= 0 && pos <= length) {
      let node = new Node(elm),
        current = head,
        previous,
        index = 0

      if (pos === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < pos) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node
      }

      length++
      return true
    } else {
      return false
    }
  }

  //Print item of the string
  this.toString = function () {
    let current = head,
      string = ''

    while (current) {
      string += current.element + (current.next ? '\n' : '')
      current = current.next
    }

    return string
  }

  //Convert list to array
  this.toArray = function () {
    let arr = [],
      current = head

    while (current) {
      arr.push(current.element)
      current = current.next
    }

    return arr
  }

  //Get the indexOf item
  this.indexOf = function (elm) {
    let current = head,
      index = -1

    while (current) {
      if (elm === current.element) {
        return ++index
      }

      index++
      current = current.next
    }

    return -1
  }

  //Delete an item from the list
  this.delete = elm => {
    return this.removeAt(this.indexOf(elm))
  }

  //Delete first item from the list
  this.deleteHead = function () {
    let current = head

    if (current === null) {
      return true
    }

    if (current.next) {
      current = current.next
      head = current
    } else {
      head = null
    }

    return true
  }

  //Delete last item from the list
  this.deleteTail = function () {
    let current = head

    if (current === null) {
      return true
    }

    while (current.next) {
      if (!current.next.next) {
        current.next = null
      } else {
        current = current.next
      }
    }

    return true
  }

  //Find the item in the list
  this.isPresent = elm => {
    return this.indexOf(elm) !== -1
  }

  //Check if list is empty
  this.isEmpty = function () {
    return length === 0
  }

  //Get the size of the list
  this.size = function () {
    return length
  }

  //Get the head of the list
  this.getHead = function () {
    return head
  }
}

/*********************************************************
 *                  CLASS IMPLEMENTATION                 *  
 *********************************************************/



//Node
class Node {
  constructor (elm, next = null) {
    this.element = elm
    this.next = next
  }
}

//LinkedList
class LinkedList {
  constructor () {
    this.length = 0
    this.head = null
  }

  //Add new item in the linkedlist
  append = function (elm) {
    let node = new Node(elm),
      current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.length++
  }

  //Remove item from any position
  removeAt = function (pos) {
    if (pos > -1 && pos < this.length) {
      let current = this.head,
        previous,
        index = 0

      if (pos === 0) {
        this.head = current.next
      } else {
        while (index++ < pos) {
          previous = current
          current = current.next
        }

        previous.next = current.next
      }

      this.length--
      return current.element
    } else {
      return null
    }
  }

  //Add item at any position
  insert = function (pos, elm) {
    if (pos >= 0 && pos <= this.length) {
      let node = new Node(elm),
        current = this.head,
        previous,
        index = 0

      if (pos === 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < pos) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node
      }

      this.length++
      return true
    } else {
      return false
    }
  }

  //Print item of the string
  toString = function () {
    let current = this.head,
      string = ''

    while (current) {
      string += current.element + (current.next ? '\n' : '')
      current = current.next
    }

    return string
  }

  //Convert list to array
  toArray = function () {
    let arr = [],
      current = this.head

    while (current) {
      arr.push(current.element)
      current = current.next
    }

    return arr
  }

  //Get the indexOf item
  indexOf = function (elm) {
    let current = this.head,
      index = -1

    while (current) {
      if (elm === current.element) {
        return ++index
      }

      index++
      current = current.next
    }

    return -1
  }

  //Delete an item from the list
  delete = elm => {
    return this.removeAt(this.indexOf(elm))
  }

  //Delete first item from the list
  deleteHead = function () {
    let current = this.head

    if (current === null) {
      return true
    }

    if (current.next) {
      current = current.next
      this.head = current
    } else {
      this.head = null
    }

    return true
  }

  //Delete last item from the list
  deleteTail = function () {
    let current = this.head

    if (current === null) {
      return true
    }

    while (current.next) {
      if (!current.next.next) {
        current.next = null
      } else {
        current = current.next
      }
    }

    return true
  }

  //Find the item in the list
  isPresent = elm => {
    return this.indexOf(elm) !== -1
  }

  //Check if list is empty
  isEmpty = function () {
    return this.length === 0
  }

  //Get the size of the list
  size = function () {
    return this.length
  }

  //Get the head of the list
  getHead = function () {
    return this.head
  }
}
