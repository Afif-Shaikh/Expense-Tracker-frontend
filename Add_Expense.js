document.getElementById('add-expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const expenseName = document.getElementById('expense-name').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const type = document.getElementById('type').value;
    const otherDetails = document.getElementById('other-details').value;

    // Here, we could handle saving the data to a database or local storage
    console.log({
        expenseName,
        amount,
        date,
        category,
        type,
        otherDetails
    });

    // Reset the form after submission
    document.getElementById('add-expense-form').reset();
    alert('Expense added successfully!');
	window.location.href = "Dashboard.html";

});
