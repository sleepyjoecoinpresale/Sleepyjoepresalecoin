
document.addEventListener("DOMContentLoaded", function() {
    const transactions = [
        { date: "2025-04-19 14:21:35", buyer: "0x8CB085A285c2fD31212aF79704967C9D380A9dC1", referrer: "0xABCDEF1234567890ABCDEF1234567890ABCDEF12", amount: 1.5 },
        { date: "2025-04-19 15:03:12", buyer: "0xDEADBEEF1234567890DEADBEEF1234567890DEAD", referrer: "0x8CB085A285c2fD31212aF79704967C9D380A9dC1", amount: 0.8 }
    ];

    const goalBNB = 20;
    const collectedBNB = transactions.reduce((sum, tx) => sum + tx.amount, 0);
    const progressPercent = Math.min((collectedBNB / goalBNB) * 100, 100).toFixed(2);

    const progressBar = document.getElementById("filled");
    const progressText = document.getElementById("progress-text");

    progressBar.style.width = progressPercent + "%";
    progressText.textContent = progressPercent + "% of goal achieved";

    const tbody = document.querySelector("#transactions-table tbody");
    transactions.reverse().forEach(tx => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${tx.date}</td>
            <td>${tx.buyer}</td>
            <td>${tx.referrer}</td>
            <td>${tx.amount.toFixed(2)} BNB</td>
        `;
        tbody.appendChild(row);
    });
});

function copyReferral() {
    const input = document.getElementById("referral-link");
    input.select();
    document.execCommand("copy");
    alert("Referral link copied!");
}
