document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

document.querySelector("[destaque]").setAttribute("title", "Destaque");

const dynamic = document.querySelector("#dynamicSRC");

function dynamicalImage() {
  const date = new Date();
  const month = date.getMonth();

  switch (month) {
    case 0:
      dynamic.src = "img/month/janeiro.png";
      break;
    case 1:
      dynamic.src = "img/month/fevereiro.png";
      break;
    case 2:
      dynamic.src = "img/month/março.png";
      break;
    case 3:
      dynamic.src = "img/month/abril.png";
      break;
    case 4:
      dynamic.src = "img/month/maio.png";
      break;
    case 5:
      dynamic.src = "img/month/junho.png";
      break;
    case 6:
      dynamic.src = "img/month/julho.png";
      break;
    case 7:
      dynamic.src = "img/month/agosto.png";
      break;
    case 8:
      dynamic.src = "img/month/setembro.png";
      break;
    case 9:
      dynamic.src = "img/month/outubro.png";
      break;
    case 10:
      dynamic.src = "img/month/novembro.png";
      break;
    case 11:
      dynamic.src = "img/month/dezembro.png";
      break;
  }
}

dynamicalImage();

const mail = document.getElementById("mailLink");
const zap = document.getElementById("waLink");

mail.addEventListener("click", () => {
  window.open(atob(mail.dataset.mail), "_blank");
});

zap.addEventListener("click", () => {
  window.open(atob(zap.dataset.zap), "_blank");
});
