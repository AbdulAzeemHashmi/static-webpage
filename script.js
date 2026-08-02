// ---------- PRICE CALCULATOR ----------
document.getElementById('calcBtn').addEventListener('click', function() {
    const workType = document.getElementById('workType').value;
    const deadlineInput = document.getElementById('deadlineDate').value;
    const resultDiv = document.getElementById('priceResult');

    // Check if date is selected
    if (!deadlineInput) {
        resultDiv.innerHTML = '⚠️ Please select a deadline date.';
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deadlineDate = new Date(deadlineInput);
    deadlineDate.setHours(0, 0, 0, 0);

    // Calculate difference in days
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // If deadline is in the past
    if (diffDays < 0) {
        resultDiv.innerHTML = '❌ The deadline cannot be in the past. Please pick a future date.';
        return;
    }

    let price = 0;
    let typeLabel = '';

    if (workType === 'assignment') {
        typeLabel = 'Assignment';
        if (diffDays >= 7) {
            price = 100;
        } else if (diffDays >= 4) {
            price = 200;
        } else if (diffDays >= 1) {
            if (diffDays <= 2) {
                price = 500;
            } else {
                price = 200;
            }
        } else {
            price = 500;
        }
    } else { // Project
        typeLabel = 'Project';
        if (diffDays > 7) {
            price = 1000;
        } else if (diffDays >= 1) {
            price = 2000;
        } else {
            price = 2000;
        }
    }

    // Display the result
    resultDiv.innerHTML = `
        ✅ ${typeLabel} with ${diffDays} day(s) remaining: 
        <span style="color: #0b2a41; font-size: 2rem;">${price} PKR</span>
    `;
});