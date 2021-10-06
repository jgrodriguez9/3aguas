export const parseProduct = productObj =>{
    const assetsM = (assetsMedia, pos) => {
        try {
            return assetsMedia[pos].url;
        } catch (error) {
            return "https://demaxin.s3.ap-south-1.amazonaws.com/img6-1588705236520.jpg"   
        }
    }
    return {
        id: productObj.id,
        title: productObj.name,
        description: productObj.description,
        discount: false,
        discountOff: 0,
        newPrice: productObj.price.raw,
        newProduct: false,
        offer: false,
        oldPrice: productObj.price.raw,
        onSale: false,
        categories: productObj.categories,
        inventory: productObj.inventory,
        variant_groups: productObj.variant_groups,
        assets: productObj.assets,
        type: "Women Clothes",
        imageUrl: assetsM(productObj.assets, 0),
        imageHoverUrl: assetsM(productObj.assets, 1),
        quantity: 1
    }
}