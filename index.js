document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop < windowHeight - 100) {
        reveal.classList.add("visible");
      } else {
        reveal.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
/*nav bar scrolling to correct place */

document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").charAt(0) !== "#") {
      return;
    }
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    console.log(targetId);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // Adjust offset as needed
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

/*ends*/

const triggerTabList = document.querySelectorAll("#myTab button");
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    tabTrigger.show();
  });
});
