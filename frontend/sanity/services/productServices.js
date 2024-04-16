import { client } from "../client";
//Les mer om GROQ (Sanitys spørrespråk): https://www.sanity.io/docs/how-queries-work

//Funksjon som henter alt innhold av type products fra Sanity
export async function fetchAllProducts() {
    const data = await client.fetch(`*[_type == "products"]{
        _id,
        productname,
        "slug": producturl.current,
        price,
        stock,
        "catname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url
    }`)
    return data
}

//Funksjon som henter et produkt basert på en slug:
export async function fetchProductBySlug(slug) {
    const data = await client.fetch(`*[_type == "products" && producturl.current == $slug]{
        productname,
        description,
        "categoryname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url,
        price,
        stock,
        reviews
    }`, {slug})
    return data
}

//Funksjon som legger til en anmeldelse på et produkt:
export async function updateReview(productid, reviewer, rating, comment) {
    const result = await writeClient
    .patch(productid).setIfMissing({reviews: []})
    .append("reviews", [{reviewer: reviewer, comment: comment, rating: rating}])
    .commit({autoGenerateArraykeys: true})
    .then(() => {return "Anmeldelse lagt til"})
    .catch((error) => {return "Error: " + error.message})
}
