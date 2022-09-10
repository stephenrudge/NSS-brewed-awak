import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name }</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const productId = parseInt(itemClicked.id.split("--")[1])

            for (const product of products) {
                if (product.id === productId) {
                    window.alert(`${product.name} costs ${product.price}`)
                }
            }
        }
    }
)
