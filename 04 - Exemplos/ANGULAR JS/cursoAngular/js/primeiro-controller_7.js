angular.module('aplicacao').controller('PrimeiroController', function($scope){
	$scope.nome = "Joyce Miranda";
	var nome = "Fulano de Tal";



	$scope.alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3']; 


	$scope.iniciado = true;


	$scope.finalizar = function(){
		$scope.iniciado = false;
	};


	$scope.iniciar = function(){
		$scope.iniciado = true;
	};

	$scope.submeter = function(){
		$scope.alunos.push($scope.nome_aluno)
	};

});

