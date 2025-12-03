const calculateAspects = (planets) => {
    const aspects = [];
    const planetNames = Object.keys(planets);

    for (let i = 0; i < planetNames.length; i++) {
        for (let j = i + 1; j < planetNames.length; j++) {
            const p1 = planets[planetNames[i]];
            const p2 = planets[planetNames[j]];

            if (!p1 || !p2) continue;

            let diff = Math.abs(p1.longitude - p2.longitude);
            if (diff > 180) diff = 360 - diff;

            // Conjunction
            if (diff < 10) {
                aspects.push({ p1: p1.name, p2: p2.name, type: 'Conjunction', diff });
            }

            // Opposition (180)
            if (Math.abs(diff - 180) < 10) {
                aspects.push({ p1: p1.name, p2: p2.name, type: 'Opposition', diff });
            }

            // Special Aspects
            let forwardDiff = (p2.longitude - p1.longitude);
            if (forwardDiff < 0) forwardDiff += 360;

            // Mars
            if (p1.name === 'Mars') {
                if (Math.abs(forwardDiff - 90) < 10) aspects.push({ p1: 'Mars', p2: p2.name, type: '4th Aspect', diff: forwardDiff });
                if (Math.abs(forwardDiff - 210) < 10) aspects.push({ p1: 'Mars', p2: p2.name, type: '8th Aspect', diff: forwardDiff });
            }
            // Jupiter
            if (p1.name === 'Jupiter') {
                if (Math.abs(forwardDiff - 120) < 10) aspects.push({ p1: 'Jupiter', p2: p2.name, type: '5th Aspect', diff: forwardDiff });
                if (Math.abs(forwardDiff - 240) < 10) aspects.push({ p1: 'Jupiter', p2: p2.name, type: '9th Aspect', diff: forwardDiff });
            }
            // Saturn
            if (p1.name === 'Saturn') {
                if (Math.abs(forwardDiff - 60) < 10) aspects.push({ p1: 'Saturn', p2: p2.name, type: '3rd Aspect', diff: forwardDiff });
                if (Math.abs(forwardDiff - 270) < 10) aspects.push({ p1: 'Saturn', p2: p2.name, type: '10th Aspect', diff: forwardDiff });
            }

            // Check reverse
            let reverseDiff = (p1.longitude - p2.longitude);
            if (reverseDiff < 0) reverseDiff += 360;

            if (p2.name === 'Mars') {
                if (Math.abs(reverseDiff - 90) < 10) aspects.push({ p1: 'Mars', p2: p1.name, type: '4th Aspect', diff: reverseDiff });
                if (Math.abs(reverseDiff - 210) < 10) aspects.push({ p1: 'Mars', p2: p1.name, type: '8th Aspect', diff: reverseDiff });
            }
            if (p2.name === 'Jupiter') {
                if (Math.abs(reverseDiff - 120) < 10) aspects.push({ p1: 'Jupiter', p2: p1.name, type: '5th Aspect', diff: reverseDiff });
                if (Math.abs(reverseDiff - 240) < 10) aspects.push({ p1: 'Jupiter', p2: p1.name, type: '9th Aspect', diff: reverseDiff });
            }
            if (p2.name === 'Saturn') {
                if (Math.abs(reverseDiff - 60) < 10) aspects.push({ p1: 'Saturn', p2: p1.name, type: '3rd Aspect', diff: reverseDiff });
                if (Math.abs(reverseDiff - 270) < 10) aspects.push({ p1: 'Saturn', p2: p1.name, type: '10th Aspect', diff: reverseDiff });
            }
        }
    }

    return aspects;
};

module.exports = { calculateAspects };
