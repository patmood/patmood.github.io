$(document).ready(function() {
  var projectTemplate = $('#project-template').html()

  // Email button click
  $('.email-me').on('click', function() {
    $(this).html('<input type="text" value="patrick.n.moody@gmail.com">')
    $('.email-me input').select()
    $(this).unbind('click')
  })

  // Populate project info
  $.getJSON('projects.json', function(data) {
    data.projects.forEach(function(project) {
      $('#projects').append(_.template(projectTemplate, project))
    })
  })
})
