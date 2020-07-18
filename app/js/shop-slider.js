$(document).ready(() => {
  
  const shopSlider = $("#shopSlider");

  shopSlider.owlCarousel({
      items: 3,
      loop: true,
      dots: false,
      smartSpeed: 500
    });

  $('#shopSliderLeft').click(() => {
    shopSlider.trigger('prev.owl.carousel');
  });
  $('#shopSliderRight').click(() => {
    shopSlider.trigger('next.owl.carousel');
  });
  
  // headerSlider.on('initialized.owl.carousel', (event) => {
  //   $('.slide-controls-number__active').text(event.item.index + 1)
  //   $('.slide-controls-number__total').text(event.item.count)
  // });
  
  // headerSlider.owlCarousel({
  //   items: 1,
  //     // loop: true,
  //     dots: false,
  //     smartSpeed: 2000
  // });
  
  
  
  // headerSlider.on('changed.owl.carousel', (event) => {
  //   $('.slide-controls-number__active').text(event.item.index + 1)
  //   $('.slide-controls-number__total').text(event.item.count)
  // });

})
