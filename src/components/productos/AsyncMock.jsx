import iphone from '../../assets/iphone12.jpg'
import samsung from '../../assets/SamsungS23.jpg'
import xiaomi from '../../assets/xiami13.jpg'
import nokia from '../../assets/nokiaXR21.jpg'

const products = [
    {
id:'1',
name: 'Apple iPhone 12',
price: 449,
category:'celular',
img: iphone,
stock: 25,
description:'Apple iPhone 12, 64GB, rojo - desbloqueado (renovado prémium)'
    },

    { id:'2', name: 'Samsung Galaxy S23', price: 759, category:'celular', img: samsung, stock: 18, description:'128GB + Cargador de 45W - Smartphone Android, Batería de 3900 mAh, Smartphone Desbloqueado, Color Negro (Versión Española)'},
    { id:'3', name: 'Xiaomi 13 Lite', price: 425, category:'celular', img: xiaomi, stock: 31, description:'Smartphone de 8+128GB, Pantalla de 6,55" AMOLED 120Hz , Snapdragon 7 Gen 1, triple cámara de 48MP, 4500 mAh, negro (Versión ES + 3 años de garantía)'},
    { id:'4', name: 'Nokia XR21 5G', price: 581, category:'celular', img: nokia, stock: 19, description:'128GB + 6GB RAM gsm Unlocked Android Rugged Smart Phone'}
]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const pedirItemPorId =(id) =>{
    return new Promise((resolve)=>{
        const item = products.find((el)=> el.id ===id)

        if (item){
            resolve(item)
        } 
    })
}
