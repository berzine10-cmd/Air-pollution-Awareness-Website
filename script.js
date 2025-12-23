function getAirQuality() {
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("result");

    // Demo data (realistic values for India)
    const airData = {
        Delhi: 210,
        Mumbai: 95,
        Kolkata: 130,
        Chennai: 70,
        Bengaluru: 55
    };

    const pm25 = airData[city];

    let healthMsg = "";

    if (pm25 <= 50) {
        healthMsg = "✅ Air quality is GOOD.";
    } else if (pm25 <= 100) {
        healthMsg = "⚠️ Moderate pollution. Sensitive people take care.";
    } else if (pm25 <= 200) {
        healthMsg = "❌ Poor air quality. Avoid outdoor activities.";
    } else {
        healthMsg = "🚨 Very Poor! Serious health risk.";
    }

    resultDiv.innerHTML = `
        <h3>${city}</h3>
        <p><strong>PM2.5:</strong> ${pm25} µg/m³</p>
        <p>${healthMsg}</p>
    `;
}