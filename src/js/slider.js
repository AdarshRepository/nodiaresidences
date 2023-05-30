$(document).ready(function() {
      var owl = $("#commercial-benefits-owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 2],
          [1023, 3],
          [1024, 4],
          [1600, 5]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#commercial-benefits-owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });


$(document).ready(function() {
      var owl = $("#all-projects-owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 2],
          [1023, 3],
          [1024, 3],
          [1600, 3]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#all-projects-owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });



$(document).ready(function() {
      var owl = $("#ongoing-projects-owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 2],
          [1023, 3],
          [1024, 3],
          [1600, 3]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#ongoing-projects-owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });


$(document).ready(function() {
      var owl = $("#completed-projects-owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 2],
          [1023, 3],
          [1024, 3],
          [1600, 3]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#completed-projects-owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });