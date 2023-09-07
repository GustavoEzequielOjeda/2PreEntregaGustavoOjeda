import { ProductsData } from "../json/products"

const Category = () =>{

    return(
        <div>
            {ProductsData.map(item => {
                return(
                    <div key={item.id}>
                        <label>{item.nombre}</label>
                    </div>
                )
            })}
        </div>
    )
}
export default Category