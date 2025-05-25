$(document).ready(function () {
  // Open/Close folder toggle
  $('.folder').on('click', function () {
    openExplorerFolder();
  });

  // Use delegated binding (important for dynamic content)
  $('#explorer').on('click', '.explorerThumbnail', function () {
    const fullSrc = $(this).attr('src');

    $('#photoViewer').load('html/programs/photoViewer.html', function () {
      $('#photoViewerImage').attr('src', fullSrc);
      reviveWindow('photoViewer');
    });
  });
});

function openExplorerFolder(folderId, event) {
  // Hide all previews
  $('.file-preview').hide();

  // Remove selection from all
  $('.folder').removeClass('selected');

  // Show target folder preview
  const $target = $('#' + folderId);
  const wasVisible = $target.is(':visible');

  if (!wasVisible) {
    $target.show();
    $(event.currentTarget).addClass('selected');
  }
}