document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const fatAmount = parseFloat(document.getElementById('fatAmount').value);
    const calorieDeficit = parseFloat(document.getElementById('calorieDeficit').value);

    if (isNaN(fatAmount) || isNaN(calorieDeficit) || fatAmount <= 0 || calorieDeficit <= 0) {
        alert("Bitte geben Sie gültige Werte ein.");
        return;
    }

    // Calculate days required
    const caloriesPerKgFat = 7000;
    const totalCaloriesNeeded = fatAmount * caloriesPerKgFat;
    const daysRequired = totalCaloriesNeeded / calorieDeficit;

    // Display result
    const resultElement = document.getElementById('result');
    const daysRequiredElement = document.getElementById('daysRequired');
    
    daysRequiredElement.textContent = `Sie benötigen etwa ${Math.ceil(daysRequired)} Tage, um ${fatAmount} kg Fett zu verlieren.`;
    
    resultElement.classList.add('show');
});
