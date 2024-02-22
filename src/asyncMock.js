const products = [
    {
        id: 1,
        name: 'Hugo el Dinosaurio',
        price: 1890,
        category: 'big',
        img: '/assets/l_hugo.jpg',
        stock: 5,
        description: 'El muñeco de apego perfecto para los más peques.'
    },
    {
        id: 2,
        name: 'Ollie el Zorrillo',
        price: 1890,
        category: 'big',
        img: '/assets/l_ollie.jpg',
        stock: 5,
        description: 'Ideal para los más peques.'
    },
    {
        id: 3,
        name: 'Carrot la Coneja',
        price: 1890,
        category: 'big',
        img: '/assets/l_carrot.jpg',
        stock: 5,
        description: 'Carrot viene a robarnos el corazón a todos.'
    },
    {
        id: 4,
        name: 'Honey Bear',
        price: 1200,
        category: 'medium',
        img: '/assets/m_honeybear.jpg',
        stock: 5,
        description: 'Este nuevo amiguito llegó para quedarse.'
    },
    {
        id: 5,
        name: 'Baby Bunny',
        price: 1200,
        category: 'medium',
        img: '/assets/m_babybunny.jpg',
        stock: 5,
        description: 'Un conejito suavecito y esponjoso.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    }) 
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}