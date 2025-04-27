// Fake match data
const matches = [
    { id: 1, team1: 'MI', team2: 'CSK', date: '5th May 2025', location: 'Wankhede Stadium' },
    { id: 2, team1: 'RCB', team2: 'KKR', date: '7th May 2025', location: 'Chinnaswamy Stadium' },
    { id: 3, team1: 'SRH', team2: 'DC', date: '9th May 2025', location: 'Rajiv Gandhi Stadium' }
];

const matchList = document.querySelector('.matches');
const bookingForm = document.getElementById('booking-form');
const ticketForm = document.getElementById('ticketForm');
const confirmation = document.getElementById('confirmation');
const ticketDetails = document.getElementById('ticketDetails');

// Load matches dynamically
matches.forEach(match => {
    const div = document.createElement('div');
    div.className = 'match-card';
    div.innerHTML = `
        <h3>${match.team1} vs ${match.team2}</h3>
        <p>${match.date}</p>
        <p>${match.location}</p>
        <button onclick="bookMatch('${match.team1} vs ${match.team2}')">Book Now</button>
    `;
    matchList.appendChild(div);
});

function bookMatch(matchName) {
    document.getElementById('matchName').value = matchName;
    bookingForm.style.display = 'block';
    matchList.style.display = 'none';
}

// Handle ticket booking
ticketForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const matchName = document.getElementById('matchName').value;
    const seatType = document.getElementById('seatType').value;
    const quantity = document.getElementById('quantity').value;

    ticketDetails.innerHTML = `
        Match: <strong>${matchName}</strong><br>
        Seat Type: <strong>${seatType}</strong><br>
        Quantity: <strong>${quantity}</strong><br>
        Total Amount: <strong>₹${calculatePrice(seatType, quantity)}</strong>
    `;

    bookingForm.style.display = 'none';
    confirmation.style.display = 'block';
});

function calculatePrice(seatType, quantity) {
    let price = 0;
    if (seatType === 'Standard') price = 500;
    else if (seatType === 'VIP') price = 1500;
    else if (seatType === 'Platinum') price = 3000;

    return price * quantity;
}
