async function getBooks() {
  const response = await fetch(
    "https://upflex-book-store-api.herokuapp.com/books"
  );
  const books = await response.json();
  showContents(books);
}

getBooks();

let tabs = document.querySelectorAll(".tabs");
let tabContents = document.querySelectorAll(".works");
let bookOne = document.querySelector(".bookOne");
let bookTwo = document.querySelector(".bookTwo");
let main = document.querySelector(".main");

function showContents(books) {
  tabs.forEach((tab) =>
    tab.addEventListener("click", (e) => {
      if (e.target.className === "tab-2-h3" || "tab-3-h3") {
        let mainCon = document.createElement("div");
        let div = document.createElement("div");
        div.classList.add("div");
        let link = document.createElement("a");
        link.textContent = "Go back";
        link.classList.add("link")
        link.addEventListener("click", () => {
          main.classList.add("show");
          bookOne.classList.remove("show");
          bookTwo.classList.remove("show");
        });
        let button = document.createElement("button");
        button.textContent = "Add to basket";
        let container = document.createElement("div");
        container.classList.add("bas-con");
        container.innerHTML = `${
          e.target.className === "tab-2-h3"
            ? `<img src=${books[0].cover}/>
            <h3>Title</h3>
            <p>${books[0].title}</p>
            <h3>Author</h3>
            <p>${books[0].author}</p>`
            : `<img src=${books[1].cover}/>
            <h3>Title</h3>
            <p>${books[1].title}</p>
            <h3>Author</h3>
            <p>${books[1].author}</p>`
        }`;

        div.appendChild(link);
        div.appendChild(container);
        if (e.target.className === "tab-2-h3") {
          main.classList.remove("show");
          bookOne.classList.add("show");
          mainCon.appendChild(div);
          mainCon.appendChild(button);
          bookOne.appendChild(mainCon);
          if (bookOne.children.length > 1) {
            bookOne.removeChild(bookOne.lastElementChild);
          }
        } else {
          main.classList.remove("show");
          bookTwo.classList.add("show");
          mainCon.appendChild(div);
          mainCon.appendChild(button);
          bookTwo.appendChild(mainCon);
          if (bookTwo.children.length > 1) {
            bookTwo.removeChild(bookTwo.lastElementChild);
          }
        }
      }
    })
  );
}

// function showEachBook(id) {}

function removeShow() {
  tabContents.forEach((content) => content.classList.remove("show"));
}
