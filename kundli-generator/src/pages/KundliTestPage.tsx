import { useState } from "react";
import { KundliEngine } from "../astro-engine/index";

export default function TestKundliPage() {
    const [output, setOutput] = useState<any>(null);

    const handleTest = () => {
        const engine = new KundliEngine();

        const kundli = engine.generate({
            date: new Date("1998-08-15T14:45:00"),
            lat: 28.6139,
            lon: 77.2090
        });

        setOutput(kundli);
    };

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ fontSize: "28px", marginBottom: 20 }}>Kundli Engine Test</h1>

            <button
                onClick={handleTest}
                style={{
                    padding: "10px 20px",
                    background: "purple",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Generate Kundli
            </button>

            {output && (
                <pre
                    style={{
                        marginTop: 20,
                        background: "#111",
                        color: "lime",
                        padding: 20,
                        borderRadius: 10,
                    }}
                >
                    {JSON.stringify(output, null, 2)}
                </pre>
            )}
        </div>
    );
}
