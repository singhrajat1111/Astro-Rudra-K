// Test script to reproduce Kundli API error
const testData = {
  name: "Test User",
  date: "1990-01-15",
  time: "10:30",
  lat: 28.6139,
  lon: 77.2090,
  place: "New Delhi",
  timezone: 5.5,
  dst: 0
};

console.log("Testing /api/kundli endpoint...");
console.log("Request data:", JSON.stringify(testData, null, 2));

fetch("http://localhost:5000/api/kundli", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(testData)
})
  .then(res => res.json())
  .then(data => {
    console.log("\n✅ Response:");
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(err => {
    console.error("\n❌ Error:");
    console.error(err);
  });
