document.getElementById("add-income-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const incomeName = document.getElementById("income-name").value;
    const incomeAmount = document.getElementById("income-amount").value;
    const incomeDate = document.getElementById("income-date").value;
    const incomeCategory = document.getElementById("income-category").value;

    // Create a new income object (you can save it to your backend or local storage)
    const incomeData = {
        name: incomeName,
        amount: parseFloat(incomeAmount),
        date: incomeDate,
        category: incomeCategory,
    };

    // Display or process the income data (you can update the dashboard or other views here)
    console.log("New Income Added:", incomeData);

    // Optional: Show success message or redirect user
    alert("Income added successfully!");
    window.location.href = "dashboard.html"; // Redirect back to dashboard (or stay on the page)
});
