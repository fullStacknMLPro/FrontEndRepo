

window.addEventListener('load',
()=>document.querySelector('.preloader').classList.add('hidePreloader'));










$(document).ready(function () {
  //ripples
  $("#header,.info,#special-items").ripples({
    dropRadius: 15,
    perturbance: 0.009

  });



  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change');

  })

  //window scroll

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 718) {
      $('.navbar').addClass('navbar-background')
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })
  //smooth scroll
  $('.nav-item a, .header-link, #back-to-top').click(function (link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000);

  })






  //window scroll

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);
    if (position >= 718) {
      $('#back-to-top').addClass('scrollTop')

    } else {
      $('#back-to-top').removeClass('scrollTop');

    }
  })


  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      // options for gallery
      enabled: true
    }
  });



});