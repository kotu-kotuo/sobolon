$(function () {
  //drawerjs
  $('.drawer').drawer()

  //smoothscroll
  // スムーススクロール
        jQuery('a[href^="#"]').click(function () {
          let header = jQuery(".header").innerHeight();
          let speed = 300;
          let id = jQuery(this).attr("href");
          let target = jQuery("#" == id ? "html" : id);
          let position = jQuery(target).offset().top;
          if ("fixed" !== jQuery(".header").css("position")) {
            position = jQuery(target).offset().top;
          }
          if (0 > position) {
            position = 0;
          }
          jQuery("html, body").animate(
            {
              scrollTop: position - $('#js-header').outerHeight()
            },
            speed
          );
          return false;
        });

//wow
  new WOW().init()

  //googleform
  let $form = $( '#js-form' )
  $form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
      //送信に成功したときの処理
        $form.slideUp()
        $('#js-success').slideDown()
      },
      200: function () {
      //送信に失敗したときの処理
        $form.slideUp()
        $('#js-error').slideDown()
      }
    }
  });
  return false;
  });

  //form入力確認
  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function () {
    if (
      $('#js-form input [type="text"]').val() !== "" &&
      $('#js-form input [type="email"]').val() !== "" &&
      $('#js-form input [name="entry.648562729"]').prop('checked') === true


    ) {
      $submit.prop('disabled', false)
      $submit.addClass('-active')
    } else {
      $submit.prop('disabled', true)
      $submit.removeClass('-active')
    }
  })

})
