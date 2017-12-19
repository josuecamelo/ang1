angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function () {
      var vm = this //vm view model
      vm.hello = 'Hello World Josué Camelo!';
      vm.person = {
          name: 'Josué',
          last_name: 'Camelo'
      };

      vm.alertMe = function(){
            alert(vm.person.name);
      };
    }
  });
