

const history = [
    {
        path: "images/Books/History/H1.png",
        Name: "History Book",
        price: "25$"
    },

    {
        path: "images/Books/History/H2.png",
        Name: "History Book",
        price: "25$"
    },

    {
        path: "images/Books/History/H3.png",
        Name: "History Book",
        price: "25$"
    },

    {
        path: "images/Books/History/H4.png",
        Name: "History Book",
        price: "25$"
    },

    {
        path: "images/Books/History/H5.png",
        Name: "History book",
        price: "25$"
    },

    {
        path: "images/Books/History/H6.png",
        Name: "History Book",
        price: "25$"
    }
]


const adventure = [
    {
        path : "images/Books/Adventure/A1.png",
        Name: "Adventure Book",
        price: "25$"
    },
    {
        path : "images/Books/Adventure/A2.png",
        Name: "Adventure Book",
        price: "25$"
    },
    {
        path : "images/Books/Adventure/A3.png",
        Name: "Adventure Book",
        price: "25$"
    },
    {
        path : "images/Books/Adventure/A4.png",
        Name: "Adventure Book",
        price: "25$"
    },
    {
        path : "images/Books/Adventure/A5.png",
        Name: "Adventure Book",
        price: "25$"
    }
]


const biography  = [
    {
        path: "images/Books/Biography/B1.png",
        Name: "Biography Book",
        price: "25$"
    },
    {
        path: "images/Books/Biography/B2.png",
        Name: "Biography Book",
        price: "25$"
    },
    {
        path: "images/Books/Biography/B3.png",
        Name: "Biography Book",
        price: "25$"
    },
    {
        path: "images/Books/Biography/B4.png",
        Name: "Biography Book",
        price: "25$"
    },
    {
        path: "images/Books/Biography/B5.png",
        Name: "Biography Book",
        price: "25$"
    },
    {
        path: "images/Books/Biography/B6.png",
        Name: "Biography Book",
        price: "25$"
    },
    {
        path: "images/Books/Biography/B7.png",
        Name: "Biography Book",
        price: "25$"
    },
    {
        path: "images/Books/Biography/B8.png",
        Name: "Biography Book",
        price: "25$"
    }

]


const drama  = [
    {
        path: "images/Books/Drama/D1.png",
        Name: "Drama Book",
        price: "25$"
    },
    {
        path: "images/Books/Drama/D2.png",
        Name: "Drama Book",
        price: "25$"
    },
    {
        path: "images/Books/Drama/D3.png",
        Name: "Drama Book",
        price: "25$"
    },
    {
        path: "images/Books/Drama/D4.png",
        Name: "Drama Book",
        price: "25$"
    },
    {
        path: "images/Books/Drama/D5.png",
        Name: "Drama Book",
        price: "25$"
    },
    {
        path: "images/Books/Drama/D6.png",
        Name: "Drama Book",
        price: "25$"
    },
    {
        path: "images/Books/Drama/D7.png",
        Name: "Drama Book",
        price: "25$"
        
    }
]



const fiction = [
    {
        path: "images/Books/Fiction/F1.png",
        Name: "Fiction Book",
        price: "25$"
    },
    {
        path: "images/Books/Fiction/F2.png",
        Name: "Fiction Book",
        price: "25$"
    },
    {
        path: "images/Books/Fiction/F3.png",
        Name: "Fiction Book",
        price: "25$"
    },
    {
        path: "images/Books/Fiction/F4.png",
        Name: "Fiction Book",
        price: "25$"
    },
    {
        path: "images/Books/Fiction/F5.png",
        Name: "Fiction Book",
        price: "25$"
    },
    {
        path: "images/Books/Fiction/F6.png",
        Name: "Fiction Book",
        price: "25$"
    },
    {
        path: "images/Books/Fiction/F7.png",
        Name: "Fiction Book",
        price: "25$"
    },
    {
        path: "images/Books/Fiction/F8.png",
        Name: "Fiction Book",
        price: "25$"
    },
    {
        path: "images/Books/Fiction/F9.png",
        Name: "Fiction Book",
        price: "25$"
    },
    {
        path: "images/Books/Fiction/F10.png",
        Name: "Fiction Book",
        price: "25$"
    }
]




const mystery = [
    {
        path: "images/Books/Mystery/M1.png",
        Name: "Mystery Book",
        price: "25$"
    },
    {
        path: "images/Books/Mystery/M2.png",
        Name: "Mystery Book",
        price: "25$"
    },
    {
        path: "images/Books/Mystery/M3.png",
        Name: "Mystery Book",
        price: "25$"
    },
    {
        path: "images/Books/Mystery/M4.png",
        Name: "Mystery Book",
        price: "25$"
    },
    {
        path: "images/Books/Mystery/M5.png",
        Name: "Mystery Book",
        price: "25$"
    },
    

]





function loadBooks(category, books) {
    const bookContainer = document.querySelector(".book-container");

    for (const book of books) {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-item");

        const imageElement = document.createElement("img");
        imageElement.src = book.path;
        imageElement.classList.add("book-img");

        const nameElement = document.createElement("p");
        nameElement.textContent = book.Name;
        nameElement.classList.add("book-name");

        const priceElement = document.createElement("p");
        priceElement.textContent = book.price;
        priceElement.classList.add("book-price");

        bookDiv.appendChild(imageElement);
        bookDiv.appendChild(nameElement);
        bookDiv.appendChild(priceElement);

        bookContainer.appendChild(bookDiv);
    }
}


const url = new URLSearchParams(window.location.search);
const category = url.get("category");




if (category === "history") {
    loadBooks("history", history);
} else if(category === "biography"){
    loadBooks("biography", biography)
} else if(category === "drama"){
    loadBooks("drama", drama);
}else if(category === "adventure") {
    loadBooks("adventure", adventure);
} else if(category === "mystery") {
    loadBooks("mystery", mystery);
}else if(category === "fiction"){
    loadBooks("fiction", fiction)
}

