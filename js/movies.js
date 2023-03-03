const movies = [
  {
    title: "Rivera - S3",
    prod: "ARCHERY - SKY",
    dir: "Oskar Thor Axelsson, Paul Walker, Sarah Harding",
    dp: "Philip Kress, Jan Richter Friis",
    img: "../img/rivera.jpg",
    link: "https://youtu.be/EKP8tC1oSbw",
  },
  {
    title: "The walking dead - S10",
    prod: "AMC",
    dir: "Greg Nikotero",
    dp: "Duane Manwiller",
    img: "../img/twd.jpg",
    link: "https://www.youtube.com/watch?v=DB8x81nL8B0",
  },
  {
    title: "Jack Ryan - Season 2",
    prod: "Amazon",
    dir: "Phil Abraham, Dennie Gordon, Andrew Bernstein",
    dp: "Arnau Valls Colomer-Richard Rutkowsky-Patrick Murgia",
    img: "../img/jack-r.jpg",
    link: "https://www.youtube.com/watch?v=II06Vwx5Jc4&t=2s",
  },
  {
    title: "Operation Finale",
    prod: "MGM",
    dir: "Chris Weitz",
    dp: "Javier Aguirresarobe",
    img: "../img/operacion-f.jpg",
    link: "https://www.youtube.com/watch?v=07Y4_6PD0Z4",
  },
  {
    title: "Beyond Sleep",
    prod: "Key Films",
    dir: "Boudewijn Koole",
    dp: "Melle van Essen",
    img: "../img/beyond-sleep.jpg",
    link: "https://www.youtube.com/watch?v=TtmYZ-mjEX0",
  },
  {
    title: "Triple 9",
    prod: "",
    dir: "",
    dp: "",
    img: "../img/triple-9.jpg",
    link: "https://www.youtube.com/watch?v=vOFqiwmnOYE",
  },
  {
    title: "The Road",
    prod: "",
    dir: "",
    dp: "",
    img: "../img/the-road.jpg",
    link: "https://www.youtube.com/watch?v=tloYv8bUAHY",
  },
  {
    title: "Nueve Reinas",
    prod: "",
    dir: "",
    dp: "",
    img: "../img/nueve-reinas.jpg",
    link: "https://www.youtube.com/watch?v=P63PyjeDoKk",
  },
];

const moviesContainer = document.querySelector("#movies");

movies.forEach((mov) => {
  let movCard = document.createElement("div");
  movCard.classList.add("portfolio__card");
  movCard.innerHTML = `
      <div class="portfolio__card">
          <a href="${mov.link}" target="_blank">
          <div class="portfolio__card-img">
              <img src="${mov.img}" alt="${mov.title.toLowerCase()}" />
          </div>
          <div class="portfolio__card-text">
              <h4>${mov.title}</h4>
              <p>${mov.prod != "" ? "Prod: " + mov.prod : ""}</p>
              <p>${mov.dir != "" ? "Dir: " + mov.dir : ""}</p>
              <p>${mov.dp != "" ? "DP: " + mov.dp : ""}</p>
          </div>
          </a>
      </div>
      `;
  moviesContainer.appendChild(movCard);
});
