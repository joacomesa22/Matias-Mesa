const commercials = [
  {
    title: "Wohninvest 'End of Decadence'",
    prod: "Bonaparte Films Berlin",
    dir: "Nico Kreis",
    img: "../img/wohninvest.jpg",
    link: "https://youtu.be/z3fdpN2xWNg",
  },
  {
    title: "Momondo",
    prod: "Lomo",
    dir: "Sebastian Blenkov",
    img: "../img/momondo.jpg",
    link: "https://www.youtube.com/watch?v=7qKWBNYMBi8",
  },
  {
    title: "Pepsi black... So what",
    prod: "Primo",
    dir: "Nico Perez Veiga",
    img: "../img/pepsi-black.jpg",
    link: "https://www.youtube.com/watch?v=jqFMqNUJ5Cg",
  },
  {
    title: "VW Duality",
    prod: "Primo",
    dir: "Nico Perez veiga",
    img: "../img/vw-duality.jpg",
    link: "https://www.youtube.com/watch?v=0Xcz5p7Znts",
  },
  {
    title: "Apple Music",
    prod: "",
    dir: "",
    img: "../img/apple.jpg",
    link: "https://www.youtube.com/watch?v=IZG2Han29xM",
  },
  {
    title: "Dow Bread",
    prod: "",
    dir: "",
    img: "../img/dow-bread.jpg",
    link: "https://www.youtube.com/watch?v=AIR59-kzdLE",
  },
  {
    title: "Personal Fest",
    prod: "",
    dir: "",
    img: "../img/personal-fest.jpg",
    link: "https://www.youtube.com/watch?v=IANiK_3O5LI",
  },
  {
    title: "Star Wars",
    prod: "",
    dir: "",
    img: "../img/star-wars.jpg",
    link: "https://www.youtube.com/watch?v=IA0nudw3DAs",
  },
];

const commercialsContainer = document.querySelector("#commercials");

commercials.forEach((comm) => {
  let commCard = document.createElement("div");
  commCard.classList.add("portfolio__card");
  commCard.innerHTML = `
    <div class="portfolio__card">
        <a href="${comm.link}" target="_blank">
        <div class="portfolio__card-img">
            <img src="${comm.img}" alt="${comm.title.toLowerCase()}" />
        </div>
        <div class="portfolio__card-text">
            <h4>${comm.title}</h4>
            <p>${comm.prod != "" ? "Prod: " + comm.prod : ""}</p>
            <p>${comm.dir != "" ? "Dir: " + comm.dir : ""}</p>
        </div>
        </a>
    </div>
    `;
  commercialsContainer.appendChild(commCard);
});
