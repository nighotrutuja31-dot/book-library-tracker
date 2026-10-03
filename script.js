// ======================================================
// READORA - MY READING SPACE
// Complete Book Library Tracker
// ======================================================


// ======================================================
// STORAGE
// ======================================================

const STORAGE_KEY = "readora_books_v3";
const THEME_KEY = "readora_theme";


// ======================================================
// 20 READY-MADE BOOKS
// ======================================================

const demoBooks = [

    {
        id: 1,
        title: "छावा",
        author: "शिवाजी सावंत",
        category: "Historical",
        status: "want",
        rating: 0,
        favorite: false,
        date: 1
    },

    {
        id: 2,
        title: "मृत्युंजय",
        author: "शिवाजी सावंत",
        category: "Historical",
        status: "read",
        rating: 5,
        favorite: true,
        date: 2
    },

    {
        id: 3,
        title: "श्रीमान योगी",
        author: "रणजित देसाई",
        category: "Historical",
        status: "reading",
        rating: 0,
        favorite: true,
        date: 3
    },

    {
        id: 4,
        title: "पानिपत",
        author: "रणजित देसाई",
        category: "Historical",
        status: "read",
        rating: 5,
        favorite: false,
        date: 4
    },

    {
        id: 5,
        title: "स्वामी",
        author: "रणजित देसाई",
        category: "Historical",
        status: "want",
        rating: 0,
        favorite: false,
        date: 5
    },

    {
        id: 6,
        title: "युगंधर",
        author: "शिवाजी सावंत",
        category: "Historical",
        status: "want",
        rating: 0,
        favorite: false,
        date: 6
    },

    {
        id: 7,
        title: "ययाती",
        author: "वि. स. खांडेकर",
        category: "Marathi Literature",
        status: "read",
        rating: 4,
        favorite: true,
        date: 7
    },

    {
        id: 8,
        title: "श्यामची आई",
        author: "साने गुरुजी",
        category: "Marathi Literature",
        status: "read",
        rating: 5,
        favorite: true,
        date: 8
    },

    {
        id: 9,
        title: "कोसला",
        author: "भालचंद्र नेमाडे",
        category: "Marathi Literature",
        status: "want",
        rating: 0,
        favorite: false,
        date: 9
    },

    {
        id: 10,
        title: "दुनियादारी",
        author: "सुहास शिरवळकर",
        category: "Marathi Literature",
        status: "reading",
        rating: 0,
        favorite: true,
        date: 10
    },

    {
        id: 11,
        title: "व्यक्ती आणि वल्ली",
        author: "पु. ल. देशपांडे",
        category: "Marathi Literature",
        status: "read",
        rating: 5,
        favorite: false,
        date: 11
    },

    {
        id: 12,
        title: "बटाट्याची चाळ",
        author: "पु. ल. देशपांडे",
        category: "Marathi Literature",
        status: "want",
        rating: 0,
        favorite: false,
        date: 12
    },

    {
        id: 13,
        title: "नटसम्राट",
        author: "वि. वा. शिरवाडकर",
        category: "Drama",
        status: "read",
        rating: 5,
        favorite: true,
        date: 13
    },

    {
        id: 14,
        title: "फकिरा",
        author: "अण्णाभाऊ साठे",
        category: "Marathi Literature",
        status: "want",
        rating: 0,
        favorite: false,
        date: 14
    },

    {
        id: 15,
        title: "असा मी असामी",
        author: "पु. ल. देशपांडे",
        category: "Marathi Literature",
        status: "read",
        rating: 4,
        favorite: false,
        date: 15
    },

    {
        id: 16,
        title: "मनाचे श्लोक",
        author: "समर्थ रामदास",
        category: "Poetry / Shayari",
        status: "want",
        rating: 0,
        favorite: true,
        date: 16
    },

    {
        id: 17,
        title: "विशाखा",
        author: "कुसुमाग्रज",
        category: "Poetry / Shayari",
        status: "read",
        rating: 5,
        favorite: true,
        date: 17
    },

    {
        id: 18,
        title: "Wings of Fire",
        author: "A. P. J. Abdul Kalam",
        category: "Motivational",
        status: "read",
        rating: 5,
        favorite: true,
        date: 18
    },

    {
        id: 19,
        title: "Ignited Minds",
        author: "A. P. J. Abdul Kalam",
        category: "Motivational",
        status: "reading",
        rating: 0,
        favorite: false,
        date: 19
    },

    {
        id: 20,
        title: "You Can Win",
        author: "Shiv Khera",
        category: "Motivational",
        status: "want",
        rating: 0,
        favorite: false,
        date: 20
    }

];


// ======================================================
// STATE
// ======================================================

let books =
    JSON.parse(
        localStorage.getItem(
            STORAGE_KEY
        )
    );

if (
    !books ||
    !Array.isArray(books) ||
    books.length === 0
) {

    books =
        JSON.parse(
            JSON.stringify(
                demoBooks
            )
        );

    saveBooks();
}


let currentStatus = "all";

let searchText = "";

let sortType = "recent";


// ======================================================
// DOM ELEMENTS
// ======================================================

const bookGrid =
    document.getElementById(
        "bookGrid"
    );

const emptyState =
    document.getElementById(
        "emptyState"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const sortSelect =
    document.getElementById(
        "sortSelect"
    );

const totalBooks =
    document.getElementById(
        "totalBooks"
    );

const readBooks =
    document.getElementById(
        "readBooks"
    );

const readingBooks =
    document.getElementById(
        "readingBooks"
    );

const wantBooks =
    document.getElementById(
        "wantBooks"
    );

const progressFill =
    document.getElementById(
        "progressFill"
    );

const progressText =
    document.getElementById(
        "progressText"
    );

const bookForm =
    document.getElementById(
        "bookForm"
    );

const quoteBtn =
    document.getElementById(
        "quoteBtn"
    );

const quoteModal =
    document.getElementById(
        "quoteModal"
    );

const closeQuote =
    document.getElementById(
        "closeQuote"
    );

const newQuote =
    document.getElementById(
        "newQuote"
    );

const quoteText =
    document.getElementById(
        "quoteText"
    );

const themeBtn =
    document.getElementById(
        "themeBtn"
    );

const resetBtn =
    document.getElementById(
        "resetBtn"
    );


// ======================================================
// SAVE BOOKS
// ======================================================

function saveBooks() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(books)
    );

}


// ======================================================
// SEARCH BOOK COVER
// ======================================================

async function getBookCover(
    title,
    author
) {

    const query =
        encodeURIComponent(
            `${title} ${author}`
        );


    try {

        const response =
            await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1`
            );


        if (!response.ok) {

            throw new Error(
                "Google Books request failed"
            );

        }


        const data =
            await response.json();


        if (
            data.items &&
            data.items.length > 0
        ) {

            const info =
                data.items[0].volumeInfo;


            if (info.imageLinks) {

                const image =
                    info.imageLinks.thumbnail ||
                    info.imageLinks.smallThumbnail;


                if (image) {

                    return image
                        .replace(
                            "http://",
                            "https://"
                        );

                }

            }

        }

    }

    catch (error) {

        console.log(
            "Google Books cover unavailable"
        );

    }


    return null;

}


// ======================================================
// OPEN LIBRARY COVER
// ======================================================

function getOpenLibraryCover(
    title
) {

    const encodedTitle =
        encodeURIComponent(
            title
        );


    return (
        `https://covers.openlibrary.org/b/title/` +
        `${encodedTitle}-L.jpg?default=false`
    );

}


// ======================================================
// FALLBACK COVER
// ======================================================

function createFallbackCover(
    title,
    author
) {

    const safeTitle =
        String(title)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            );


    const safeAuthor =
        String(author)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            );


    const svg = `

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="700">

            <defs>

                <linearGradient
                    id="background"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1">

                    <stop
                        offset="0%"
                        stop-color="#65558f"/>

                    <stop
                        offset="100%"
                        stop-color="#b99bd3"/>

                </linearGradient>

            </defs>


            <rect
                width="500"
                height="700"
                fill="url(#background)"/>


            <rect
                x="30"
                y="30"
                width="440"
                height="640"
                rx="15"
                fill="none"
                stroke="white"
                stroke-opacity="0.45"
                stroke-width="3"/>


            <text
                x="250"
                y="250"
                fill="white"
                font-size="38"
                text-anchor="middle"
                font-family="Georgia">

                📚

            </text>


            <text
                x="250"
                y="335"
                fill="white"
                font-size="30"
                text-anchor="middle"
                font-family="Georgia">

                ${safeTitle}

            </text>


            <text
                x="250"
                y="390"
                fill="white"
                opacity="0.85"
                font-size="20"
                text-anchor="middle">

                ${safeAuthor}

            </text>


            <text
                x="250"
                y="600"
                fill="white"
                opacity="0.7"
                font-size="18"
                text-anchor="middle">

                READORA LIBRARY

            </text>

        </svg>

    `;


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );

}


// ======================================================
// STATUS LABEL
// ======================================================

function getStatusLabel(
    status
) {

    if (status === "read") {

        return "READ";

    }


    if (status === "reading") {

        return "READING";

    }


    return "WANT TO READ";

}


// ======================================================
// STATUS CLASS
// ======================================================

function getStatusClass(
    status
) {

    if (status === "read") {

        return "status-read";

    }


    if (status === "reading") {

        return "status-reading";

    }


    return "status-want";

}


// ======================================================
// STAR RATING
// ======================================================

function getStars(
    rating
) {

    const value =
        Number(rating) || 0;


    return (
        "★".repeat(value) +
        "☆".repeat(5 - value)
    );

}


// ======================================================
// ESCAPE HTML
// ======================================================

function escapeHTML(
    value
) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


// ======================================================
// RENDER BOOKS
// ======================================================

async function renderBooks() {

    let filteredBooks =
        [...books];


    // SEARCH

    if (
        searchText.trim()
    ) {

        const search =
            searchText
                .toLowerCase()
                .trim();


        filteredBooks =
            filteredBooks.filter(
                book => {

                    return (

                        book.title
                            .toLowerCase()
                            .includes(search)

                        ||

                        book.author
                            .toLowerCase()
                            .includes(search)

                        ||

                        book.category
                            .toLowerCase()
                            .includes(search)

                    );

                }
            );

    }


    // STATUS FILTER

    if (
        currentStatus ===
        "favorite"
    ) {

        filteredBooks =
            filteredBooks.filter(
                book =>
                    book.favorite
            );

    }

    else if (
        currentStatus !==
        "all"
    ) {

        filteredBooks =
            filteredBooks.filter(
                book =>
                    book.status ===
                    currentStatus
            );

    }


    // SORT

    if (
        sortType ===
        "title"
    ) {

        filteredBooks.sort(
            (a,b) =>
                a.title.localeCompare(
                    b.title
                )
        );

    }


    else if (
        sortType ===
        "rating"
    ) {

        filteredBooks.sort(
            (a,b) =>
                b.rating -
                a.rating
        );

    }


    else if (
        sortType ===
        "status"
    ) {

        filteredBooks.sort(
            (a,b) =>
                a.status.localeCompare(
                    b.status
                )
        );

    }


    else {

        filteredBooks.sort(
            (a,b) =>
                b.date -
                a.date
        );

    }


    // CLEAR GRID

    bookGrid.innerHTML = "";


    // EMPTY

    if (
        filteredBooks.length === 0
    ) {

        emptyState.style.display =
            "block";

        updateStats();

        return;

    }


    emptyState.style.display =
        "none";


    // CREATE CARDS

    filteredBooks.forEach(
        book => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "book-card";


            card.innerHTML = `

                <div class="cover-wrapper">

                    <button
                        class="favorite-btn"
                        data-action="favorite"
                        data-id="${book.id}">

                        ${
                            book.favorite
                                ? "❤️"
                                : "♡"
                        }

                    </button>


                    <img
                        class="book-cover"
                        alt="${escapeHTML(book.title)}"
                        data-loaded="false">

                </div>


                <div class="book-info">

                    <span class="category">

                        ${escapeHTML(
                            book.category
                        )}

                    </span>


                    <h3 class="book-title">

                        ${escapeHTML(
                            book.title
                        )}

                    </h3>


                    <p class="author">

                        ${escapeHTML(
                            book.author
                        )}

                    </p>


                    <div class="status-row">

                        <span
                            class="status-badge
                            ${getStatusClass(
                                book.status
                            )}">

                            ${getStatusLabel(
                                book.status
                            )}

                        </span>


                        <span class="rating">

                            ${getStars(
                                book.rating
                            )}

                        </span>

                    </div>


                    <div class="card-actions">

                        <button
                            class="small-btn"
                            data-action="status"
                            data-id="${book.id}">

                            Status

                        </button>


                        <button
                            class="small-btn"
                            data-action="rate"
                            data-id="${book.id}">

                            ⭐ Rate

                        </button>


                        <button
                            class="small-btn"
                            data-action="delete"
                            data-id="${book.id}">

                            🗑

                        </button>

                    </div>

                </div>

            `;


            bookGrid.appendChild(
                card
            );


            const image =
                card.querySelector(
                    ".book-cover"
                );


            // GOOGLE BOOKS

            getBookCover(
                book.title,
                book.author
            )

            .then(
                googleCover => {

                    if (
                        googleCover &&
                        image.dataset.loaded ===
                        "false"
                    ) {

                        image.dataset.loaded =
                            "true";

                        image.src =
                            googleCover;

                        return;

                    }


                    // OPEN LIBRARY

                    image.src =
                        getOpenLibraryCover(
                            book.title
                        );

                }
            );


            // FALLBACK

            image.addEventListener(
                "error",
                function () {

                    if (
                        image.dataset.fallback !==
                        "true"
                    ) {

                        image.dataset.fallback =
                            "true";

                        image.src =
                            createFallbackCover(
                                book.title,
                                book.author
                            );

                    }

                }
            );

        }
    );


    updateStats();

}


// ======================================================
// UPDATE STATISTICS
// ======================================================

function updateStats() {

    const total =
        books.length;


    const read =
        books.filter(
            book =>
                book.status ===
                "read"
        ).length;


    const reading =
        books.filter(
            book =>
                book.status ===
                "reading"
        ).length;


    const want =
        books.filter(
            book =>
                book.status ===
                "want"
        ).length;


    totalBooks.textContent =
        total;


    readBooks.textContent =
        read;


    readingBooks.textContent =
        reading;


    wantBooks.textContent =
        want;


    const progress =
        total === 0
            ? 0
            : Math.round(
                (
                    read /
                    total
                ) * 100
            );


    progressFill.style.width =
        progress + "%";


    progressText.textContent =
        progress + "%";

}


// ======================================================
// CARD ACTIONS
// ======================================================

bookGrid.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "button[data-action]"
            );


        if (!button) {

            return;

        }


        const id =
            Number(
                button.dataset.id
            );


        const action =
            button.dataset.action;


        const book =
            books.find(
                item =>
                    item.id === id
            );


        if (!book) {

            return;

        }


        // FAVORITE

        if (
            action ===
            "favorite"
        ) {

            book.favorite =
                !book.favorite;


            saveBooks();

            renderBooks();


            showToast(
                book.favorite
                    ? "Added to favorites ❤️"
                    : "Removed from favorites"
            );

        }


        // STATUS

        if (
            action ===
            "status"
        ) {

            const nextStatus = {

                want:
                    "reading",

                reading:
                    "read",

                read:
                    "want"

            };


            book.status =
                nextStatus[
                    book.status
                ];


            if (
                book.status !==
                "read"
            ) {

                book.rating =
                    0;

            }


            saveBooks();

            renderBooks();


            showToast(
                "Book status updated 📖"
            );

        }


        // RATING

        if (
            action ===
            "rate"
        ) {

            if (
                book.status !==
                "read"
            ) {

                showToast(
                    "Only completed books can be rated ⭐"
                );

                return;

            }


            const input =
                prompt(
                    "Enter rating from 1 to 5:"
                );


            const rating =
                Number(input);


            if (
                rating >= 1 &&
                rating <= 5
            ) {

                book.rating =
                    rating;


                saveBooks();

                renderBooks();


                showToast(
                    "Rating saved ⭐"
                );

            }

        }


        // DELETE

        if (
            action ===
            "delete"
        ) {

            const answer =
                confirm(
                    `Delete "${book.title}"?`
                );


            if (!answer) {

                return;

            }


            books =
                books.filter(
                    item =>
                        item.id !== id
                );


            saveBooks();

            renderBooks();


            showToast(
                "Book deleted 🗑"
            );

        }

    }
);


// ======================================================
// ADD NEW BOOK
// ======================================================

bookForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const title =
            document
                .getElementById(
                    "bookTitle"
                )
                .value
                .trim();


        const author =
            document
                .getElementById(
                    "bookAuthor"
                )
                .value
                .trim();


        const status =
            document
                .getElementById(
                    "bookStatus"
                )
                .value;


        const category =
            document
                .getElementById(
                    "bookCategory"
                )
                .value;


        if (
            !title ||
            !author
        ) {

            showToast(
                "Please enter book title and author"
            );

            return;

        }


        const newBook = {

            id:
                Date.now(),

            title:
                title,

            author:
                author,

            category:
                category,

            status:
                status,

            rating:
                0,

            favorite:
                false,

            date:
                Date.now()

        };


        books.unshift(
            newBook
        );


        saveBooks();

        renderBooks();

        bookForm.reset();


        showToast(
            "New book added successfully 📚"
        );

    }
);


// ======================================================
// SEARCH
// ======================================================

searchInput.addEventListener(
    "input",
    function() {

        searchText =
            this.value;


        renderBooks();

    }
);


// ======================================================
// SORT
// ======================================================

sortSelect.addEventListener(
    "change",
    function() {

        sortType =
            this.value;


        renderBooks();

    }
);


// ======================================================
// TABS
// ======================================================

document
    .querySelectorAll(
        ".tab"
    )
    .forEach(
        tab => {

            tab.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll(
                            ".tab"
                        )
                        .forEach(
                            item =>
                                item.classList
                                    .remove(
                                        "active"
                                    )
                        );


                    this.classList.add(
                        "active"
                    );


                    currentStatus =
                        this.dataset.status;


                    renderBooks();

                }
            );

        }
    );


// ======================================================
// SCROLL TO ADD BOOK
// ======================================================

document
    .getElementById(
        "scrollAddBtn"
    )
    .addEventListener(
        "click",
        function() {

            document
                .getElementById(
                    "addSection"
                )
                .scrollIntoView({
                    behavior:
                        "smooth"
                });

        }
    );


// ======================================================
// DARK MODE
// ======================================================

function loadTheme() {

    const theme =
        localStorage.getItem(
            THEME_KEY
        );


    if (
        theme ===
        "dark"
    ) {

        document.body
            .classList
            .add(
                "dark"
            );


        themeBtn.textContent =
            "☀️";

    }

}


themeBtn.addEventListener(
    "click",
    function() {

        document.body
            .classList
            .toggle(
                "dark"
            );


        const isDark =
            document.body
                .classList
                .contains(
                    "dark"
                );


        localStorage.setItem(
            THEME_KEY,
            isDark
                ? "dark"
                : "light"
        );


        themeBtn.textContent =
            isDark
                ? "☀️"
                : "🌙";

    }
);


// ======================================================
// READING QUOTES
// ======================================================

const quotes = [

    "A reader lives a thousand lives before he dies.",

    "Books are a uniquely portable magic.",

    "Reading is a conversation with the wisest people of past centuries.",

    "A book is a dream that you hold in your hand.",

    "Today a reader, tomorrow a leader.",

    "Every page is a new beginning.",

    "Reading gives us someplace to go when we have to stay where we are.",

    "Books open doors to worlds we have never visited.",

    "The more you read, the more things you will know.",

    "A good book can change the way you see the world."

];


function showRandomQuote() {

    const random =
        Math.floor(
            Math.random() *
            quotes.length
        );


    quoteText.textContent =
        quotes[random];


    quoteModal.classList.add(
        "show"
    );

}


quoteBtn.addEventListener(
    "click",
    showRandomQuote
);


newQuote.addEventListener(
    "click",
    showRandomQuote
);


closeQuote.addEventListener(
    "click",
    function() {

        quoteModal.classList.remove(
            "show"
        );

    }
);


quoteModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            quoteModal
        ) {

            quoteModal.classList.remove(
                "show"
            );

        }

    }
);


// ======================================================
// RESET DEMO
// ======================================================

resetBtn.addEventListener(
    "click",
    function() {

        const answer =
            confirm(
                "Reset your library to the original 20 demo books?"
            );


        if (!answer) {

            return;

        }


        books =
            JSON.parse(
                JSON.stringify(
                    demoBooks
                )
            );


        saveBooks();

        renderBooks();


        showToast(
            "20 demo books restored 📚"
        );

    }
);


// ======================================================
// TOAST
// ======================================================

function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function() {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}


// ======================================================
// START APPLICATION
// ======================================================

loadTheme();

renderBooks();