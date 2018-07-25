/**
 * Created by owais on 4/7/17.
 */
/** method for general ajax request*/
function send_ajax_request(data, type, url, target) {
    $.ajax({
        type: type,
        url: url,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        async: true,
        success: function (response) {
            $(target).html(response);
        },
        error: function () {
            console.log('Error occured in send_ajax_request: ' + url);
        }
    });
}
$('.get_data').click(function () {
    alert('hh');
    //event.preventDefault();
    var url = $(this).data("url");
    var type = $(this).data("method");
    var target = $(this).data('target');
    if ($(this).hasClass('prof_view')) {
        $(this).find('span').toggleClass('glyphicon-chevron-up', 'glyphicon-chevron-down');
    }
    send_ajax_request('', type, url, target);
});

