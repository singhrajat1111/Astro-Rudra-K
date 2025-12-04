import * as A from "astronomy-engine";

console.log("=== ASTRONOMY-ENGINE EXPORT STRUCTURE ===\n");

console.log("1. Direct exports (first 30):");
const keys = Object.keys(A);
console.log(keys.slice(0, 30).join(", "));
console.log(`\n   Total exports: ${keys.length}\n`);

console.log("2. Body enum:");
console.log("   A.Body:", typeof A.Body);
if (A.Body) {
    console.log("   A.Body.Sun:", A.Body.Sun);
    console.log("   A.Body.Moon:", A.Body.Moon);
}

console.log("\n3. Key functions:");
console.log("   A.MakeTime:", typeof A.MakeTime);
console.log("   A.GeoVector:", typeof A.GeoVector);
console.log("   A.Ecliptic:", typeof A.Ecliptic);
console.log("   A.SiderealTime:", typeof A.SiderealTime);
console.log("   A.SearchRiseSet:", typeof A.SearchRiseSet);
console.log("   A.Observer:", typeof A.Observer);

console.log("\n4. Testing MakeTime:");
try {
    const time = A.MakeTime(new Date());
    console.log("   ✅ Works! Result:", time.constructor.name, "- ut:", time.ut);
} catch (e) {
    console.log("   ❌ Error:", e.message);
}

console.log("\n5. Testing GeoVector:");
try {
    const time = A.MakeTime(new Date());
    const vec = A.GeoVector(A.Body.Sun, time, true);
    console.log("   ✅ Works! Result:", vec.constructor.name);
} catch (e) {
    console.log("   ❌ Error:", e.message);
}
