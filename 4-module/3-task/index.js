function highlight(table) {
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
        const statusCell = row.querySelector('td:nth-child(4)');
        const genderCell = row.querySelector('td:nth-child(3)');
        const ageCell = row.querySelector('td:nth-child(2)');

        if (statusCell) {
            if (statusCell.getAttribute('data-available') === "true") {
                row.classList.add('available');
            } else if (statusCell.getAttribute('data-available') === "false") {
                row.classList.add('unavailable');
            } else {
              // row.setAttribute('hidden', true);
              row.hidden = true; // На занятии говорил, что лучше так
            }
        }/* else {
            // row.setAttribute('hidden', true);
        }*/

        if (genderCell.textContent === 'm') {
            row.classList.add('male');
        } else if (genderCell.textContent === 'f') {
            row.classList.add('female');
        }

        if (parseInt(ageCell.textContent) < 18) {
            // ageCell.style.textDecoration = 'line-through';
            row.style.textDecoration = 'line-through';
        }
    });
}