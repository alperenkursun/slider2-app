const people = [
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
    name: "peter doe",
    job: "product manager",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
    name: "susan doe",
    job: "developer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
    name: "emma doe",
    job: "designer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
];
let i = 0;
$(document).ready(function () {
  display(i);
});
var direction = "";
function left() {
  direction = "l";
  $("#maincon").css({ transform: "translate(1000px,0px)", opacity: 0 });
  setTimeout(() => {
    $("#maincon")
      .css({ transform: "translate(1000px,-5000px)" })
      .css({ transform: "translate(-1000px,-5000px)" })
      .css({ transform: "translate(-1000px,0px)" })
      .promise()
      .done(function () {
        display(i);
      });
  }, 100);
  i--;
  if (i == -1) {
    i = 2;
  }
}

function right() {
  direction = "r";
  $("#maincon").css({ transform: "translate(-1000px,0px)" });
  setTimeout(() => {
    $("#maincon")
      .css({ transform: "translate(-1000px,-5000px)" })
      .css({ transform: "translate(1000px,-5000px)" })
      .css({ transform: "translate(1000px,0px)" })
      .promise()
      .done(function () {
        display(i);
      });
  }, 100);

  i++;
  if (i == 3) {
    i = 0;
  }
}

function display(i) {
  $("#main").html("");

  var text = `
  <div id="mainc" class="text-center">
  <div>
  <span class="text-primary h1">/</span> <span class="h1">Reviews</span>
</div>
<img
  src="${people[i].img}"
  class="rounded-circle mt-5"
  style="width: 150px; height: 150px; border: 5px solid #aee; overflow"
/>
<h4 class="text-primary text-uppercase mt-3">${people[i].name}</h4>
<h5 class="text-muted text-capitalize mt-2">${people[i].job}</h5>
<p class="text-seconadary mt-4 fs-5">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
  quoeius recusandae officia voluptas sint deserunt dicta nihil nam
  omnis?
</p>
<i
  class="fa-solid fa-quote-right text-primary mt-5"
  style="font-size: 110px"
></i>
</div>
</div>

  `;

  if (direction == "") {
    setTimeout(() => {
      $("#main").html(text);
      $("#maincon").css({
        transform: "translate(0px,0px)",
      });
    }, 0);
  } else {
    setTimeout(() => {
      $("#main").html(text);
      $("#maincon").css({
        transform: "translate(0px,0px)",
        opacity: "1",
      });
    }, 100);
  }
}
