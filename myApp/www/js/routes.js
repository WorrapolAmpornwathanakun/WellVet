angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('signup', {
    url: '/page1',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.pet', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/pet.html',
        controller: 'petCtrl'
      }
    }
  })

  .state('tabsController.addPet', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/addPet.html',
        controller: 'addPetCtrl'
      }
    }
  })

  .state('tabsController.home', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('myAccount', {
    url: '/page7',
    templateUrl: 'templates/myAccount.html',
    controller: 'myAccountCtrl'
  })

  .state('tabsController.notifications', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })

  .state('tabsController.myPets', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/myPets.html',
        controller: 'myPetsCtrl'
      }
    }
  })

  .state('tabsController.schedule', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('setting', {
    url: '/page10',
    templateUrl: 'templates/setting.html',
    controller: 'settingCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});