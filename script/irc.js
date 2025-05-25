$(document).ready(function () {
  $(document).on('keyup', '#irc-input', function (e) {
    if (e.which === 13) {
      const msg = $(this).val();
      $('#irc-messages').append(`<p><strong>You:</strong> ${msg}</p>`);
      $(this).val('');
      $('#irc-messages').scrollTop($('#irc-messages')[0].scrollHeight);
    }
  });
});
