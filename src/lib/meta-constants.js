export const domain = "brianarthur.tech";
export const twitterCard = "summary_large_image";
export const description = "Portfolio website of Brian Arthur.";
export const ogType = "website";
export const image = "https://www.brianarthur.tech/background-meta.jpg";
export const pageTitle = "brian arthur portfolio";

export const url = (page, id) => {
    if (page && page !== "home" && id) return `https://www.brianarthur.tech/${page}/${id}`;
    else if (page && page !== "home") return `https://www.brianarthur.tech/${page}/`;
    else return 'https://www.brianarthur.tech/'
}