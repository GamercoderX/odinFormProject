function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return`${title} by ${author}, ${pages} pages and ${read}.`
    }
  }

  Book.prototype.sayHello = function() {
    return "Hello, I'm a Book!"
 }

  const harryPotter1 = new Book("HP", "J.K.Rowling", "500", "have not read")
  const harryPotter2 = new Book("HP", "J.K.Rowling", "1000", "have read")
  console.log(harryPotter1.info())
  console.log(harryPotter2.info())

  console.log(Object.getPrototypeOf(harryPotter1) === Book.prototype)
  console.log(Object.getPrototypeOf(harryPotter2) === Book.prototype)

  console.log(harryPotter1.sayHello())