const getDesignStrength = (height, width, bendingMoment, quality, setNominalMoment, setFrame) => {
    if (!height || !width || !bendingMoment || !quality) {
        alert("Todos los campos son obligatorios");
        return;
    }
    const d = parseFloat(height);
    const b = parseFloat(width);
    const r = parseFloat(quality);
    const Ms = parseFloat(bendingMoment);

    let aMax;

    if (r < 280) {
        aMax = d * (3 / 8) * 0.85;
    } else {
        aMax = d * (3 / 8) * (0.85 - 0.05 * ((r - 280) / 70));
    }

    const fzCc = 0.85 * r * b * aMax;
    const Mu = (fzCc * (d - (aMax / 2))) / 100000;

    setNominalMoment(Mu);

    let designMoment;
    
    if (Ms <= (Mu * 0.9)) {
        setFrame('Solo se necesita armadura a tracción');
        designMoment = Ms;
    } else {
        setFrame('Se necesita armar a tracción y a compresión');
        designMoment = Ms;
    }

    const solveQuadraticForA = (designMoment, r, b, d) => {
        const A = -0.9 * 0.85 * r * b * 0.5;
        const B = 0.9 * 0.85 * r * b * d;
        const C = -designMoment * 100000;

        const discriminant = B * B - 4 * A * C;

        if (discriminant < 0) {
            console.error("No real roots exist for the given parameters.");
            return null;
        }

        const a1 = (-B + Math.sqrt(discriminant)) / (2 * A);
        const a2 = (-B - Math.sqrt(discriminant)) / (2 * A);

        return a1 > 0 ? a1 : a2;
    };

    const a = solveQuadraticForA(designMoment, r, b, d);
    console.log(`Valor positivo de a: ${a}`);
    return a;

    const strain = (0.003*(d-(a/0.85)))/(a/0.85)

    if (strain>0.005) {
        console.log('la deformacion es: ',strain)
    } else {
        console.log('la deformacion es: ',strain)
    }
};

export default getDesignStrength;