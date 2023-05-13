const products = [
    {
        id: "1",
        name: "Nvidia 1060 12 GB",
        price: 1250,
        category: "Tarjetas Grafias",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shashacomputers.com%2Fproducts%2Fzotac-gaming-nvidia-geforce-rtx-3060-twin-edge-12gb-gddr6-192-bit-15-gbps-pcie-4-0-gaming-graphics-card&psig=AOvVaw0EM9hrsVwGGTtH06Sjncg_&ust=1681917846655000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOi236_es_4CFQAAAAAdAAAAABAZ",
        stock: 15,
    },
    { id: "2", name: "ryzen 5 5600x", price: 250, category: "Procesadores", img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.amd.com%2Fsystem%2Ffiles%2F2020-09%2F616656-amd-ryzen-5-5000-series-PIB-fan-1260x709.png&tbnid=zfDuy18CBoN7uM&vet=12ahUKEwiqnYWR4LP-AhWDiJUCHThtAL0QMygAegUIARDlAQ..i&imgrefurl=https%3A%2F%2Fwww.amd.com%2Fes%2Fproducts%2Fcpu%2Famd-ryzen-5-5600x&docid=wZHDIoLF_mR_EM&w=1260&h=709&q=ryzen%205%205600x%20svg&ved=2ahUKEwiqnYWR4LP-AhWDiJUCHThtAL0QMygAegUIARDlAQ", stock: 15,},
    {id: "3", name: "Memoria RAM", price: 150, category: "Memorias", img:"https://http2.mlstatic.com/D_NQ_NP_612752-MLA48636149729_122021-W.jpg", stock: 15,},  
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === productCategory));
      }, 500);
    });
  };

export default products