/* CALCULATOR */

$(document).ready(function () {
  /* Bonus Onore Gloria */
  $('input[type="text"]').keyup(function () {
    var val1 = parseInt($("#value1").val() || 0);
    var val2 = Math.exp(0.00115 * val1);
    var val3 = 2 * val2 + (0.012 * val1 + 1);
    var sum = Math.min(100, val3) || 0;
    $("#result1").val(sum);
  });

  /* Guadagno Onore */
  $('input[type="text"]').keyup(function () {
    var val1 = parseInt($("#value2").val() || 0);
    var val2 = parseInt($("#value3").val() || 0);
    var val3 = parseInt($("#value4").val() || 0);
    var val4 = parseInt($("#value5").val() || 0);
    var val5 = parseInt($("#value6").val() || 0);
    var val6 = (val2 - val1) / 7 + 100;
    var val7 = Math.max(val6, 0);
    var val8 = 1 + (val3 + val4 + val5) / 100;
    var val9 = val7 * val8;
    var sum = Math.round(val9) || 0;
    $("#result2").val(sum);
  });

  /* Rischio Di Farsi Beccare Nello Spio */
  $('input[type="text"]').keyup(function () {
    var val1 = parseInt($("#value7").val() || 0);
    var val2 = parseInt($("#value8").val() || 0);
    var val3 = parseInt($("#value9").val() || 0);
    const MIN_PRECISIONE = 50;
    const MAX_PRECISIONE = 100;
    const RAPPORTO_PRECISIONE = 50 - (MAX_PRECISIONE + MIN_PRECISIONE) / 2;
    const MAX_SPIE = 15;
    const MAX_GUARDIE = 180;
    const RAPPORTO_GUARDIE_SPIE = MAX_GUARDIE / MAX_SPIE;
    const MIN_RISCHIO_SPIO_PLAYER = 5;
    const MIN_RISCHIO_SPIO_PNG = 0;
    const MAX_RISCHIO_SPIO = 95;
    var val4 =
      -(RAPPORTO_GUARDIE_SPIE * val1 - val2) + RAPPORTO_PRECISIONE + val3;
    var val5 = Math.min(val4, MAX_RISCHIO_SPIO);
    var val6 = Math.max(val5, MIN_RISCHIO_SPIO_PLAYER);
    var val7 = Math.floor(
      ((1 * val2) / val1 / RAPPORTO_GUARDIE_SPIE) * (RAPPORTO_PRECISIONE + val3)
    );
    var val8 = Math.min(val7, MAX_RISCHIO_SPIO);
    var val9 = Math.max(val8, MIN_RISCHIO_SPIO_PLAYER);
    var val10 = (val6 + val9) / 2;
    var sum = Math.round(val10) || 0;
    $("#result3").val(sum);
  });

  /* Costo Viaggio Spio
    $('input[type="text"]').keyup(function () {
      var val1 = parseInt($("#value10").val() || 0);
      var val2 = parseInt($("#value11").val() || 0);
      var val3 = parseInt($("#value12").val() || 0);
      var val4 = 0.6 * (20 * val1 * Math.log(val2 + 1) / Math.log(2.3) + val3 - 20 || 0);
      var sum = val4;
      $("#result4").val(sum);
    });*/

  /* Rischio Di Farsi Beccare Nel Sabotaggio*/
  $('input[type="text"]').keyup(function () {
    var val1 = parseInt($("#value13").val() || 0);
    var val2 = parseInt($("#value14").val() || 0);
    var val3 = parseInt($("#value15").val() || 0);
    const MAX_DANNI = 50;
    const MIN_DANNI = 10;
    const RAPPORTO_DANNI = 50 - (MAX_DANNI + MIN_DANNI) / 2;
    const MAX_SPIE = 15;
    const MAX_GUARDIE = 180;
    const RAPPORTO_GUARDIE_SPIE = MAX_GUARDIE / MAX_SPIE;
    const MAX_RISCHIO_SABOTAGGIO = 90;
    const MIN_RISCHIO_SABOTAGGIO = 10;
    var val4 = -(RAPPORTO_GUARDIE_SPIE * val1 - val2) + RAPPORTO_DANNI + val3;
    var val5 = Math.min(val4, MAX_RISCHIO_SABOTAGGIO);
    var val6 = Math.max(val5, MIN_RISCHIO_SABOTAGGIO);
    var val7 = Math.floor(
      ((1 * val2) / val1 / RAPPORTO_GUARDIE_SPIE) * (RAPPORTO_DANNI + val3)
    );
    var val8 = Math.min(val7, MAX_RISCHIO_SABOTAGGIO);
    var val9 = Math.max(val8, MIN_RISCHIO_SABOTAGGIO);
    var val10 = (val6 + val9) / 2;
    var sum = Math.round(val10) || 0;
    $("#result4").val(sum);
  });

  /* Costo Energia Fusione*/
  $('input[type="text"]').keyup(function () {
    var val1 = parseInt($("#value16").val() || 0);
    var sum = 50 * val1 + 900 || 0;
    $("#result6").val(sum);
  });

  /* Calcolo Promozione Campionato*/
  $('input[type="text"]').keyup(function () {
    var val1 = parseInt($("#value17").val() || 0);
    var val2 = parseInt($("#value18").val() || 0);
    var val3 = parseInt($("#value19").val() || 0);
    var val4 = parseInt($("#value20").val() || 0);
    var val5 = parseInt($("#value21").val() || 0);
    var val6 = parseInt($("#value22").val() || 0);
    var val7 = parseInt($("#value23").val() || 0);
    const PRESTIGIO_ORO = 1000;
    const PRESTIGIO_ARGENTO = 950;
    const PRESTIGIO_BRONZO = 850;
    const PRESTIGIO_VETRO = 700;
    const PRESTIGIO_RAME = 500;
    const PRESTIGIO_PIETRA = 300;
    const PRESTIGIO_LEGNO = 100;
    var val8 =
      val1 * PRESTIGIO_ORO +
      val2 * PRESTIGIO_ARGENTO +
      val3 * PRESTIGIO_BRONZO +
      val4 * PRESTIGIO_VETRO +
      val5 * PRESTIGIO_RAME +
      val6 * PRESTIGIO_PIETRA +
      val7 * PRESTIGIO_LEGNO;
    var val9 = val8 / 2000 + 1;
    var val10 = Math.floor(val9);
    var val11 = Math.min(val10, 21);
    sum = Math.max(val11, 1) || 0;
    $("#result5").val(sum);
  });

  /* INPUT AUTO-RESIZE */

  $.fn.textWidth = function (text, font) {
    if (!$.fn.textWidth.fakeEl)
      $.fn.textWidth.fakeEl = $("<span>").hide().appendTo(document.body);

    $.fn.textWidth.fakeEl
      .text(text || this.val() || this.text() || this.attr("placeholder"))
      .css("font", font || this.css("font"));

    return $.fn.textWidth.fakeEl.width();
  };

  $(".width-dynamic")
    .on("input", function () {
      var inputWidth = $(this).textWidth();
      $(this).css({
        width: inputWidth,
      });
    })
    .trigger("input");

  function inputWidth(elem, minW, maxW) {
    elem = $(this);
    console.log(elem);

    var targetElem = $(".width-dynamic");

    inputWidth(targetElem);
  }

  /* SIDERBAR */

  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  let circle = document.querySelector(".color-option");

  circle.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("circle")) {
      circle.querySelector(".active").classList.remove("active");
      target.classList.add("active");
      document.querySelector(".main-images .active").classList.remove("active");
      document
        .querySelector(`.main-images .${target.id}`)
        .classList.add("active");
    }
  });
});

$(document).ready(function () {
  /* INPUT AUTO-RESIZE */

  $.fn.textWidth = function (text, font) {
    if (!$.fn.textWidth.fakeEl)
      $.fn.textWidth.fakeEl = $("<span>").hide().appendTo(document.body);

    $.fn.textWidth.fakeEl
      .text(text || this.val() || this.text() || this.attr("placeholder"))
      .css("font", font || this.css("font"));

    return $.fn.textWidth.fakeEl.width();
  };

  $(".width-dynamic")
    .on("input", function () {
      var inputWidth = $(this).textWidth();
      $(this).css({
        width: inputWidth,
      });
    })
    .trigger("input");

  function inputWidth(elem, minW, maxW) {
    elem = $(this);
    console.log(elem);

    var targetElem = $(".width-dynamic");

    inputWidth(targetElem);
  }
});

$(".button").click(function () {
  $(".alert").addClass("show");
  $(".alert").removeClass("hide");
  $(".alert").addClass("showAlert");
  setTimeout(function () {
    $(".alert").removeClass("show");
    $(".alert").addClass("hide");
  }, 5000);
});
$(".close-btn").click(function () {
  $(".alert").removeClass("show");
  $(".alert").addClass("hide");
});

if ($(window).width() < 1000) {
  window.location.replace("https://community.goodgamestudios.com/empire/it");
}
