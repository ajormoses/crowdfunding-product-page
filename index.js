const toggle = document.querySelector(".toggle");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const rewardBtn = document.querySelectorAll(".reward-btn");
const modalClose = document.querySelector(".modal-close");
const articleModal = document.querySelector(".article-modal");
const circleOne = document.querySelector(".circle-one");
const circleTwo = document.querySelector(".circle-two");
const circleThree = document.querySelector(".circle-three");
const circleFour = document.querySelector(".circle-four");
const oneCircle = document.querySelector("#circle-one");
const twoCircle = document.querySelector("#circle-two");
const threeCircle = document.querySelector("#circle-three");
const fourCircle = document.querySelector("#circle-four");
const firstContributions = document.querySelector(".firstContributions");
const secondContributions = document.querySelector(".secondContributions");
const articleTwo = document.querySelector(".modal-two");
const articleThree = document.querySelector(".modal-three");

toggle.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  close.classList.toggle("show");
  menu.classList.toggle("show");
});

// reward & modal btn addEventListener
rewardBtn.forEach((rewardBtn) => {
  rewardBtn.addEventListener("click", selectReward);
});

function selectReward() {
  articleModal.style.display = "block";
}

modalClose.addEventListener("click", exit);

function exit() {
  articleModal.style.display = "none";
}

// first circle btn addEventListener
circleOne.addEventListener("click", noPledge);

function noPledge() {
  const firstPledge = document.querySelector(".noPledgebtn-one");
  oneCircle.classList.toggle("show");
  firstPledge.classList.toggle("show");
}

// first submit btn
const submitOne = document.querySelector(".noPledgebtn-one");
const support = document.querySelector(".supportModal");

submitOne.addEventListener("click", btnOne);

function btnOne() {
  articleModal.style.display = "none";
  support.style.display = "block";
}

// second circle btn addEventListener
circleTwo.addEventListener("click", BambooStand);

function BambooStand() {
  twoCircle.classList.toggle("show");
  articleTwo.classList.toggle("show");
  firstContributions.classList.toggle("show");
}

// second submit btn
const inputTwo = document.querySelector(".input-two");
const btnTwo = document.querySelector(".btn-two");
const p = document.querySelector(".text-two");

btnTwo.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputTwo.value < 25) {
    error(inputTwo, "Pledge $25 or more");
    console.log("moses");
  } else if (inputTwo.value.trim() == "") {
    error(inputTwo, "Pledge $25 or more");
  } else {
    success(inputTwo, "");
  }
});

// Error and Success function for addEventListeners starts here

function error(element, msg) {
  const parent = element.parentElement;
  parent.style.border = "1px solid Red";
  p.innerHTML = msg;
  p.style.color = "Red";
}

function errorthree(element, msg) {
  const parent = element.parentElement;
  parent.style.border = "1px solid Red";
  x.innerHTML = msg;
  x.style.color = "Red";
}

function success(element, msg) {
  const parent = element.parentElement;
  parent.style.border = "1px solid transparent";
  p.innerHTML = msg;
  articleModal.style.display = "none";
  support.style.display = "block";
}

function successthree(element, msg) {
  const parent = element.parentElement;
  parent.style.border = "1px solid transparent";
  x.innerHTML = msg;
  articleModal.style.display = "none";
  support.style.border = "1px solid hsl(176, 72%, 28%)";
  support.style.display = "block";
}

// Error and Success function for addEventListeners ends here

// third circle btn addEventListener

circleThree.addEventListener("click", BlackEdition);

function BlackEdition() {
  threeCircle.classList.toggle("show");
  articleThree.classList.toggle("show");
  secondContributions.classList.toggle("show");
}

// third btn submit
const inputThree = document.querySelector(".input-three");
const btnThree = document.querySelector(".btn-three");
const x = document.querySelector(".text-three");

btnThree.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputThree.value < 75) {
    errorthree(inputThree, "Pledge $75 or more");
  } else if (inputThree.value.trim() == "") {
    errorthree(inputThree, "Pledge $75 or more");
  } else {
    successthree(inputThree, "");
  }
});

// fourth circle btn addEventListener
circleFour.addEventListener("click", mahogany);

function mahogany() {
  const secondPledge = document.querySelector(".noPledgebtn-two");
  fourCircle.classList.toggle("show");
  secondPledge.classList.toggle("show");
}

// Fourth submit btn
const submitFour = document.querySelector(".noPledgebtn-two");

submitFour.addEventListener("click", btnFour);

function btnFour() {
  articleModal.style.display = "none";
  support.style.display = "block";
}

// Got it button
const supportBtn = document.querySelector(".gotit");

supportBtn.addEventListener("click", gotitbtn);

function gotitbtn() {
  support.style.display = "none";
}

const projBtn = document.querySelector(".project-btn");

projBtn.addEventListener("click", projectbtn);

function projectbtn() {
  const pjbtnOff = document.querySelector(".bookmark-off");
  const pjbtn0n = document.querySelector(".bookmark-on");
  const pjText = document.querySelector(".bookmark-text");
  pjbtnOff.style.display = "none";
  pjbtn0n.style.display = "block";
  pjText.textContent = "Bookmarked";
  pjText.style.color = "hsl(176, 72%, 28%)";
  projBtn.style.background = "hsl(176, 72%, 28%)";
}
