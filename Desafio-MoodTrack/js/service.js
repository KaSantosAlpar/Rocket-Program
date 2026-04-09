(function() {
    'use strict';

    angular.module('moodTrackApp')
        .service('MoodTrackService', function() {
            var self = this;

            // Carrega do localStorage ou inicia vazio
            self.records = JSON.parse(localStorage.getItem('moodtrack_records')) || [];
            
            // Lista de hábitos padrão exigida no README
            self.habits = [
                { name: 'Beber água' },
                { name: 'Exercício' },
                { name: 'Estudo' },
                { name: 'Leitura' },
                { name: 'Dormir cedo' }
            ];

            self.saveRecords = function() {
                localStorage.setItem('moodtrack_records', JSON.stringify(self.records));
            };

            self.addRecord = function(record) {
                record.id = Date.now();
                // Garante que a data seja salva como string simples para o filtro
                if (record.date instanceof Date) {
                    record.date = record.date.toISOString().split('T')[0];
                }
                self.records.unshift(record);
                self.saveRecords();
            };

            self.deleteRecord = function(id) {
                var index = self.records.findIndex(function(r) { return r.id === id; });
                if (index > -1) {
                    self.records.splice(index, 1);
                    self.saveRecords();
                }
            };

            self.getStats = function() {
                if (self.records.length === 0) {
                    return { totalRecords: 0, avgMood: 0, habitCompletionRate: 0 };
                }

                // Cálculo da Média de Humor
                var totalMood = self.records.reduce(function(sum, r) { 
                    return sum + parseInt(r.mood); 
                }, 0);

                // Cálculo da Taxa de Hábitos
                var totalPossibleHabits = 0;
                var completedHabits = 0;

                self.records.forEach(function(record) {
                    angular.forEach(record.habits, function(completed) {
                        totalPossibleHabits++;
                        if (completed === true || completed === "true") completedHabits++;
                    });
                });

                return {
                    totalRecords: self.records.length,
                    avgMood: totalMood / self.records.length,
                    habitCompletionRate: totalPossibleHabits > 0 ? (completedHabits / totalPossibleHabits * 100) : 0
                };
            };
        });
})();