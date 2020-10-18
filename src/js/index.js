import '../css/style.css';
//import 'jquery'; //npm i jquery --save
import '@fortawesome/fontawesome-free/js/all.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';

$( document ).ready(function() {
 
    $('.thumbnail2').hover(
        function(){
            $(this).find('.caption2').slideDown(250); //.fadeIn(250)
            $(this).find('.project-category').hide(); 
        },
        function(){
            $(this).find('.caption2').slideUp(250); //.fadeOut(205)
            $(this).find('.project-category').show();
        }
    );

    //وضع الصنف الفعال على عناصر القائمة العلوية   
    var pathname = window.location.pathname;//إحضار المسار المتواجدين فيه
    $('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');
    
    //إضافة الصنف الفعال للصفحات المتعلقة بصفحة المدونة
    if (window.location.pathname == "/blog-details.html" || window.location.pathname == "/add-blog.html") {
        $('.navbar-nav > li > a[href="/blog.html"]').parent().addClass('active');
    }

        //إضافة الصنف الفعال للصفحات المتعلقة بصفحة المشروع
        if (window.location.pathname == "/project-details.html") {
          $('.navbar-nav > li > a[href="/projects.html"]').parent().addClass('active');
    }

    //gallery
    let modalId = $('#image-gallery');
    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
});


var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;