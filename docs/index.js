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
let basCon = document.querySelector(".basketCon");

let value = 0;

function showContents(books) {
  tabs.forEach((tab) =>
    tab.addEventListener("click", (e) => {
      let mainCon = document.createElement("div");
      let div = document.createElement("div");
      div.classList.add("div");
      let link = document.createElement("a");
      link.textContent = "Go back";
      link.classList.add("link");
      link.addEventListener("click", () => {
        main.classList.add("show");
        bookOne.classList.remove("show");
        bookTwo.classList.remove("show");
        basCon.classList.remove("show");
      });
      let button = document.createElement("button");
      button.textContent = "Add to basket";
      button.addEventListener("click", () => {
        value++;
        increateValue(value);
      });
      let container = document.createElement("div");
      container.classList.add("bas-con");

      if (e.target.className === "tab-4 basket-bn tabs") {
        //if the target is tab-4, the show class will be removed from the main,bookOne and bookTwo container
        let payBtn = document.createElement("button");
        let parentCon = document.createElement("div");
        parentCon.classList.add("flex")
        let secondDiv = document.createElement("div");
        let quantity = document.createElement("h2");
        quantity.textContent = `X ${value}`;
        let decreamentBtn = document.createElement("button");
        decreamentBtn.textContent = "Remove";
        payBtn.classList.add("pay-btn");
        payBtn.textContent = "Pay";
        main.classList.remove("show");
        bookOne.classList.remove("show");
        bookTwo.classList.remove("show");
        let container = document.createElement("div");
        //After that the show class will be added to basCon

        basCon.classList.add("show");

        if (value < 1) {
          let emptyH3 = document.createElement("h3");
          emptyH3.classList.add("empty");
          emptyH3.textContent = "Basket is Empty";
          mainCon.classList.add("main-con");
          mainCon.appendChild(emptyH3);
          container.appendChild(link);
          container.appendChild(mainCon);
          basCon.appendChild(container);
          if (basCon.children.length > 1) {
            basCon.removeChild(basCon.lastElementChild);
          }
        } else if (
          (value > 0 && bookOne.children.length === 1) ||
          (value > 0 && bookTwo.children.length === 1)
        ) {
          if (bookOne.children.length === 1) {
            mainCon.classList.add("basket-con");
            mainCon.innerHTML = `
          <h2>${books[0].title}</h2>
          `;
            container.appendChild(link);
            container.appendChild(mainCon);
            container.appendChild(payBtn);
            secondDiv.appendChild(quantity);
            secondDiv.appendChild(decreamentBtn);
            parentCon.appendChild(container);
            parentCon.appendChild(secondDiv);
            basCon.appendChild(parentCon);
            if (basCon.children.length > 1) {
              basCon.removeChild(basCon.lastElementChild);
            }
          }
          if (bookTwo.children.length === 1) {
            mainCon.classList.add("basket-con");
            mainCon.innerHTML = `
          <h2>${books[1].title}</h2>
          `;
            container.appendChild(link);
            container.appendChild(mainCon);
            container.appendChild(payBtn);
            secondDiv.appendChild(quantity);
            secondDiv.appendChild(decreamentBtn);
            parentCon.appendChild(container);
            parentCon.appendChild(secondDiv);
            basCon.appendChild(parentCon);
            if (basCon.children.length > 2) {
              basCon.removeChild(basCon.lastElementChild);
            }
          }
        }
      } else if (e.target.className === "tab-2-h3" || "tab-3-h3") {
        container.innerHTML = `${
          e.target.className === "tab-2-h3"
            ? `<img src=${books[0].cover}/>
            <h3>Title</h3>
            <p>${books[0].title}</p>
            <h3>Author</h3>
            <p>${books[0].author}</p>`
            : e.target.className === "tab-3-h3"
            ? `<img src=${books[1].cover}/>
            <h3>Title</h3>
            <p>${books[1].title}</p>
            <h3>Author</h3>
            <p>${books[1].author}</p>`
            : ""
        }`;

        if (e.target.className === "tab-2-h3") {
          main.classList.remove("show");
          bookOne.classList.add("show");
          div.appendChild(link);
          div.appendChild(container);
          mainCon.appendChild(div);
          mainCon.appendChild(button);
          bookOne.appendChild(mainCon);
          if (bookOne.children.length > 1) {
            bookOne.removeChild(bookOne.lastElementChild);
          }
        } else if (e.target.className === "tab-3-h3") {
          main.classList.remove("show");
          bookTwo.classList.add("show");
          div.appendChild(link);
          div.appendChild(container);
          mainCon.appendChild(div);
          mainCon.appendChild(button);
          bookTwo.appendChild(mainCon);
          if (bookTwo.children.length > 1) {
            bookTwo.removeChild(bookTwo.lastElementChild);
          }
        } else {
          return "";
        }
      }
    })
  );
}

let empty = document.querySelector(".value");
// function showEachBook(id) {}

function increateValue(value) {
  empty.textContent = `${value < 0 ? "Empty" : value + " items"}`;
}
