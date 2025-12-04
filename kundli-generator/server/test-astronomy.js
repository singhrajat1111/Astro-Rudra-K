import * as Astronomy from "astronomy-engine";

console.log("Astronomy object keys:");
console.log(Object.keys(Astronomy).slice(0, 20));

console.log("\nLooking for MakeTime:");
console.log("Astronomy.MakeTime:", typeof Astronomy.MakeTime);
console.log("Astronomy.default?.MakeTime:", typeof Astronomy.default?.MakeTime);

// Try to use it
try {
    const date = new Date();
    const time = Astronomy.MakeTime(date);
    console.log("\n✅ MakeTime works!", time);
} catch (e) {
    console.log("\n❌ MakeTime error:", e.message);

    // Try with default
    try {
        const time2 = Astronomy.default.MakeTime(date);
        console.log("\n✅ MakeTime via default works!", time2);
    } catch (e2) {
        console.log("\n❌ MakeTime via default error:", e2.message);
    }
}
