import { setProducts, startLoadingProducts } from "./productosState"


export const getProducts = ( page = 0 ) => {
    return async (dispatch, getState) =>  {
        dispatch ( startLoadingProducts());

        const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326`);
        const data = await resp.json();
        



        dispatch ( setProducts ( {productos: data.results, page : page + 1 }))
    }


}