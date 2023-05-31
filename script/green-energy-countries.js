$(function() {
    $("td[colspan=5]").find(".country-detail").hide();
    $(".click-tr").click(function(event) {
      event.stopPropagation();
      var $target = $(event.target);
      if ($target.closest("td").attr("colspan") > 1) {
        $target.slideUp();
      } else {
        $target.closest("tr").next().find(".country-detail").slideToggle();
      }
    });
  });