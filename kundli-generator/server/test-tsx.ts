import * as A from "astronomy-engine";

console.log("=== TSX TEST ===\n");

console.log("MakeTime type:", typeof A.MakeTime);
console.log("Body type:", typeof A.Body);

if (A.Body) {
    console.log("Body.Sun:", A.Body.Sun);
}

try {
    const time = A.MakeTime(new Date());
    console.log("\n✅ MakeTime works!", time);
} catch (e: any) {
    console.log("\n❌ MakeTime error:", e.message);
}
