
export function printDate(d) {
    if (d === 'Present') return d;

    let date = new Date(d);
    let options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString("en-US", options);
}