const links = document.querySelectorAll("#nav-main > li");
let linkID;
let targetLink;
let selectedMenu;
const hiddenNav = document.getElementById("hidden-nav");

function targetUrShit() {
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
      linkID = link.id;
      hiddenNav.style.display = "flex";
      targetLink = document.getElementById(`${linkID}`);
      selectedMenu = document.querySelector(`.${linkID}`);
      console.log(targetLink);
      console.log(selectedMenu);
      displayHiddenMenu();
    });
  });

  links.forEach((link) => {
    link.addEventListener("mouseover", (event) => {
      event.stopPropagation();
      linkID = link.id;
      hiddenNav.style.display = "flex";
      targetLink = document.getElementById(`${linkID}`);
      selectedMenu = document.querySelector(`.${linkID}`);
      console.log(targetLink);
      console.log(selectedMenu);
      displayHiddenMenu();
    });
  });

  document.addEventListener("click", () => {
    hiddenNav.style.display = "none";
  });

  hiddenNav.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

targetUrShit();

function displayHiddenMenu() {
  links.forEach((link) => {
    const menu = document.querySelector(`.${link.id}`);
    if (link.id === linkID) {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });
}
