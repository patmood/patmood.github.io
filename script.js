// BACKBONE
var Projects = Backbone.Collection.extend({
  url: '/projects.json'
})

var IndexView = Backbone.View.extend({
  el: '#content'
, render: function() {
    var template = _.template($('#index-template').html())
    this.$el.html(template)
  }
, events: {
    'click #projects-button': 'navProjects'
  , 'click .email-me': 'showEmail'
  }
, navProjects: function() {
    router.navigate('projects', {trigger: true})
  }
, showEmail: function(e) {
    $(e.target).html('<input type="text" value="patrick.n.moody@gmail.com">')
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
, events: {
    'click #home-button': 'navHome'
  , 'click .email-me': 'showEmail'
  }
, navHome: function() {
    router.navigate('', {trigger: true})
  }
, showEmail: function(e) {
    $(e.target).html('<input type="text" value="patrick.n.moody@gmail.com">')
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
