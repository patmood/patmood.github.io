// On Ready
$(function() {
  // Email button click
  $('.email-me').on('click', function() {
    $(this).html('<input type="text" value="patrick.n.moody@gmail.com">')
    $('.email-me input').select()
    $(this).unbind('click')
  })
})

// BACKBONE
var Project = Backbone.Model.extend({})
var Projects = Backbone.Collection.extend({
  model: Project
, url: '/projects.json'
})

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
    var template = _.template($('#projects-template').html(), this.model)
    this.$el.html(template)

    // TODO: Render a individual project views here
    var projectTemplate = $('#project-template').html()
    _.each(this.model.models, function(project) {
      $('#projects').append(_.template(projectTemplate, project.attributes))
    })
  }
})

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  , 'projects': 'projects'
  }
, index: function() {
    new IndexView().render()
  }
, projects: function() {
    var projects = new Projects()
    projects.fetch({
      success: function(projects) {
        new ProjectsView({ model: projects }).render()
      }
    })
  }
})

var router = new AppRouter()
Backbone.history.start()
