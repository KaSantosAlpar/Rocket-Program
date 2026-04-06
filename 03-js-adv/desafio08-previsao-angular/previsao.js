angular.module('previsaoApp', [])
    .filter('capitalize', function() {
        return function(input) {
            if (!input) return '';
            return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        };
    })
    .controller('PrevisaoController', ['$http', function($http) {
        var ctrl = this;
        
        // CONFIGURAÇÃO 
        ctrl.API_KEY = '23cd1b955c54dcd50db1f4d6917655a0'; 
        ctrl.UNITS = 'metric'; // Celsius
        ctrl.LANG = 'pt_br';
        
        // Estados iniciais
        ctrl.cidade = 'São Paulo';
        ctrl.clima = null;
        ctrl.carregando = false;
        ctrl.erro = '';
        
        // Busca clima
        ctrl.buscarClima = function(event) {
            if (event && event.keyCode !== 13) return; // Enter
            
            if (!ctrl.cidade || ctrl.cidade.trim() === '') {
                ctrl.erro = 'Digite uma cidade!';
                return;
            }
            
            ctrl.carregando = true;
            ctrl.erro = '';
            ctrl.clima = null;
            
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ctrl.cidade.trim())}&appid=${ctrl.API_KEY}&units=${ctrl.UNITS}&lang=${ctrl.LANG}`;
            
            $http.get(url)
                .then(function(response) {
                    ctrl.clima = response.data;
                    console.log(' Clima carregado:', ctrl.clima);
                })
                .catch(function(error) {
                    console.error(' Erro:', error);
                    if (error.status === 404) {
                        ctrl.erro = 'Cidade não encontrada!';
                    } else if (error.status === 401) {
                        ctrl.erro = 'Chave da API inválida!';
                    } else {
                        ctrl.erro = 'Erro ao buscar clima. Tente novamente!';
                    }
                })
                .finally(function() {
                    ctrl.carregando = false;
                });
        };
        
        // Busca inicial
        ctrl.buscarClima();
    }]);