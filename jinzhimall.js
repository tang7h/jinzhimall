var jinzhimall = angular.module('jinzhimall',[]);
jinzhimall.controller('jinzhimallCtrl',function($scope,$http){
  $scope.widgets = {
    search: {
      status: 'hide',
      show: function(){
        this.status = 'show';
      },
      hide: function(){
        this.status = 'hide';
      }
    }
  }
  $scope.pages = {
    currentPage : 'home',
    turnto: function(page){
      this.currentPage = page;
    }
  }
  $scope.search = {
    status: 'off',
    toggle: function(){
      if(this.status=='off'){
        this.status='on';
      }else{
        this.status='off';
      }
    }
  }
})
