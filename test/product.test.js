import Product from "../src/model/Product"
import ProductService from "../src/service/ProductService"

test('deve validar baixa de estoque da venda de uma unidade', () => {
    const product = new Product('Celular', 500.00, 900.00, 10)
    ProductService(product, 1)
    expect(product.stock).toBe(9)
})

test('deve aceitar a venda de mais do que uma unidade', () => {
    const product = new Product('Celular', 500.00, 900.00, 10)
    ProductService(product, 3)
    expect(product.stock).toBe(7)
})