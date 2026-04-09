(function() {
    'use strict';
    
    angular.module('moodTrackApp')
        .controller('MoodTrackController', [
            '$scope', 'MoodTrackService',
            function($scope, MoodTrackService) {
                var vm = this;
                
                // --- Dados iniciais ---
                vm.records = MoodTrackService.records;
                vm.availableHabits = MoodTrackService.habits;
                
                vm.newRecord = {
                    date: new Date().toISOString().split('T')[0],
                    mood: null,
                    habits: {},
                    observation: ''
                };

                vm.filters = {
                    date: '',
                    mood: ''
                };
                
                // --- Mappings de Humor ---
                vm.moodEmojis = {
                    1: '😢',
                    2: '😐',
                    3: '😊',
                    4: '😄'
                };
                
                vm.moodLabels = {
                    1: 'Muito triste',
                    2: 'Neutro',
                    3: 'Feliz',
                    4: 'Muito feliz'
                };
                
                // --- Inicialização de Hábitos no Formulário ---
                angular.forEach(vm.availableHabits, function(habit) {
                    vm.newRecord.habits[habit.name] = false;
                });
                
                // --- Funções Públicas (Ações da Tela) ---
                
                vm.addRecord = function() {
                    // Usa angular.copy para não manter a referência ao formulário
                    MoodTrackService.addRecord(angular.copy(vm.newRecord));
                    vm.resetNewRecord();
                    vm.updateFilteredRecords();
                };
                
                vm.deleteRecord = function(id) {
                    if (confirm('Tem certeza que deseja excluir este registro?')) {
                        MoodTrackService.deleteRecord(id);
                        vm.updateFilteredRecords();
                    }
                };
                
                vm.isValidRecord = function() {
                    return vm.newRecord.date && vm.newRecord.mood;
                };
                
                vm.resetNewRecord = function() {
                    vm.newRecord = {
                        date: new Date().toISOString().split('T')[0],
                        mood: null,
                        habits: {},
                        observation: ''
                    };
                    angular.forEach(vm.availableHabits, function(habit) {
                        vm.newRecord.habits[habit.name] = false;
                    });
                };
                
                vm.getMoodEmoji = function(mood) {
                    return vm.moodEmojis[mood] || '';
                };
                
                vm.getMoodLabel = function(mood) {
                    return vm.moodLabels[mood] || '';
                };
                
                vm.clearFilters = function() {
                    vm.filters = { date: '', mood: '' };
                    vm.updateFilteredRecords();
                };
                
                // --- Lógica de Filtro e Estatísticas ---
                
                vm.updateFilteredRecords = function() {
    vm.filteredRecords = vm.records.filter(function(record) {
        // Correção para funcionar com o input type="date"
        var filterDateStr = vm.filters.date ? vm.filters.date.toISOString().split('T')[0] : '';
        var recordDateStr = record.date instanceof Date ? record.date.toISOString().split('T')[0] : record.date;

        var dateMatch = !vm.filters.date || recordDateStr === filterDateStr;
        var moodMatch = !vm.filters.mood || record.mood == vm.filters.mood;
        return dateMatch && moodMatch;
    });
    vm.stats = MoodTrackService.getStats();
                    
                    // Atualiza os indicadores do topo da página
                    vm.stats = MoodTrackService.getStats();
                };
                
                
                vm.updateFilteredRecords();
            
            } 
        ]); 
})(); 