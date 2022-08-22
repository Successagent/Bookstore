// async function getBooks() {
//   const response = await fetch(
//     "https://upflex-book-store-api.herokuapp.com/books"
//   );
//   const books = await response.json();
//   showTabContent(books)
// }
// getBooks();
let basketBtn = document.querySelector(".basket-bn");
let body = document.querySelector("body");
let value = 0;
let secondVal = 0;
let item = document.querySelector(".value");
let tabContents = document.querySelectorAll(".works");
let home = document.querySelector(".main");
let tabs = document.querySelectorAll(".tabs");
tabs.forEach((tab) => tab.addEventListener("click", showTabContent));

function showTabContent(e) {
  value;
  let arr = [
    {
      title: "The Catcher in the Rye",
      author: "J. D. Salinger",
      cover: "image.png",
    },
    {
      title: "The Green Mile",
      author: "Stephen King",
      cover: "image.png",
    },
  ];
  // this books variable, is the one accessing the array of books
  let books = arr;
  // the content variable is targeting each tab-content when click
  removeContents();
  let content = document.querySelector(`#${this.id}-content`);
  content.classList.add("show");

  if (this.id === "tab-3" || this.id === "tab-2") {
    let bookOne = document.querySelector(".bookOne");
    let bookTwo = document.querySelector(".bookTwo");
    let link = document.createElement("a");
    link.textContent = "Go back";

    //when this event is called, it will take you back to homepage
    link.addEventListener("click", () => {
      home.classList.add("show");
      content.removeChild(content.firstElementChild);
      content.removeChild(content.firstElementChild);
    });

    let btn = document.createElement("button");
    btn.textContent = "Add to basket";
    btn.addEventListener("click", () => increameter(arr, content));
    //the container here will wrap everything
    let container = document.createElement("div");
    let bookCon = document.createElement("div");
    bookCon.classList.add("book-con");
    bookCon.innerHTML = `
    ${
      this.id === "tab-2"
        ? `<img src=${books[0].cover}/>
    <h2>Title</h2>
    <p>${books[0].title}</p>
    <h2>Author</h2>
    <p>${books[0].author}</p>`
        : `<img src=${books[1].cover}/>
    <h2>Title</h2>
    <p>${books[1].title}</p>
    <h2>Author</h2>
    <p>${books[1].author}</p>`
    }
    `;

    if (this.id === "tab-2") {
      container.appendChild(link);
      container.appendChild(bookCon);
      bookOne.appendChild(container);
      bookOne.appendChild(btn);
    } else if (this.id === "tab-3") {
      container.appendChild(link);
      container.appendChild(bookCon);
      bookTwo.appendChild(container);
      bookTwo.appendChild(btn);
    }
  } else if (this.id === "tab-4") {
    let bookOne = document.querySelector(".bookOne");
    let bookTwo = document.querySelector(".bookTwo");
    if (bookOne.children.length > 1) {
      bookOne.removeChild(bookOne.firstElementChild);
      bookOne.removeChild(bookOne.firstElementChild);
    } else if (bookTwo.children.length > 1) {
      bookTwo.removeChild(bookTwo.firstElementChild);
      bookTwo.removeChild(bookTwo.firstElementChild);
    }
    let link = document.createElement("a");
    let container = document.createElement("div");
    if (value === 0) {
      let empty = document.createElement("h3");
      empty.classList.add("basket-h2");
      empty.textContent = "Basket is Empty";
      link.addEventListener("click", () => {
        home.classList.add("show");
        content.removeChild(content.firstElementChild);
        content.removeChild(content.firstElementChild);
      });
      let basketCon = document.querySelector(".basketCon");
      link.textContent = "Go back";
      container.appendChild(link);
      container.appendChild(empty);
      basketCon.appendChild(container);
      if (basketCon.children.length > 1) {
        basketCon.removeChild(basketCon.lastElementChild);
      }
    }
  }
  if (content.id === "tab-2-content" || ("tab-3-content" && value > 0)) {
    if (content.id === "tab-4-content" && value > 0) {
      let link = document.createElement("a");
      link.textContent = "Go back";
      link.addEventListener("click", () => {
        home.classList.add("show");
        basketCon.classList.remove("show");
      });
      let basketCon = document.querySelector(".basketCon");
      let div = document.createElement("div");
      let con = document.createElement("div");
      div.classList.add("basket-item");
      div.innerHTML = `
${
  content.id == "tab-2-content"
    ? ` <h3> ${arr[0].title}</h3>
<p> ${arr[0].author}</p>
`
    : `<h3> ${arr[1].title}</h3>
<p> ${arr[1].author}</p>`
}
 `;
      con.appendChild(link);
      con.appendChild(div);
      basketCon.appendChild(con);
      console.log(content);
      if (basketCon.children.length > 2) {
        basketCon.removeChild(basketCon.lastElementChild);
      }
    }
  }
}

function increameter(arr, content) {
  value++;
  item.textContent = `${value > 0 ? value + " items" : "Empty"}`;
  if (content.id === "tab-4-content" && basketCon.childNodes.length === 1) {
    console.log(basketCon.children.length);
  }
}

function removeContents() {
  tabContents.forEach((content) => content.classList.remove("show"));
}
