// On Ready
$(function() {
  // Email button click
  $('.email-me').on('click', function() {
    $(this).html('<input type="text" value="patrick.n.moody@gmail.com">')
    $('.email-me input').select()
    $(this).unbind('click')
  })

  // Populate project info
  // $.getJSON('projects.json', function(data) {
  //   data.projects.forEach(function(project) {
  //     $('#projects').append(_.template(projectTemplate, project))
  //   })
  // })
})

// BACKBONE
var IndexView = Backbone.View.extend({
  el: '#content'
, render: function() {
    var template = _.template($('#index-template').html())
    this.$el.html(template)
  }
})

var ProjectsView = Backbone.View.extend({
  el: '#content'
, render: function() {
    var projects = {}
    var template = _.template($('#project-template').html(), projects)
  }
})

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  , 'madebyme': 'projects'
  }
, index: function() {
    new IndexView().render()
  }
})

var router = new AppRouter()
Backbone.history.start()
