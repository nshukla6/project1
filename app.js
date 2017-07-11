(function(){
  angular.module("LunchCheck",[])
  .controller("LunchCheckController",['$scope',function($scope){
    $scope.lunchItems;
    $scope.msg;
    $scope.onSubmit=function(){
      $scope.msg='';
      var lunchItems=$scope.lunchItems
      var lunchItemCount=0;
      if(lunchItems===undefined || lunchItems===null){
        $scope.msg='Please enter data first';
        return;
      }
      lunchItems=lunchItems.split(',')
      lunchItems.forEach(function(item){
        lunchItemCount++;
      });
      if(lunchItemCount<=3){
        $scope.msg="Enjoy!";

      }
      else{
        $scope.msg="Too much!";
      }
      $scope.lunchItems=null;
      
    }

  }])

})();
