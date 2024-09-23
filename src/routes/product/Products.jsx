import { RxUpdate } from "react-icons/rx";
import { useGetProductQuery, useUpdateProductMutation } from '../../redux/api/product';
import { FaPencilAlt, FaShoppingCart } from "react-icons/fa";
const Pruducts = () => {
  const { data } = useGetProductQuery()
  const [ updateProduct, {data:updateData}] = useUpdateProductMutation()

  const handleAddToCart = (item) => {

    updateProduct({id: item.id, title:"name updated", description:"description updated"})

  }
  const handleAddToCartBasket = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }))
}
  console.log(updateData)
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <img
                src={item.images}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h1 className="text-xl font-semibold text-gray-900 mb-3 truncate">{item.title}</h1>

                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                  {item.description}
                </p>

                <div className="flex items-center justify-between gap-[100px]">
  <FaPencilAlt 
    onClick={() => handleAddToCart(item)} 
    className="w-6 h-6 text-gray-700 hover:text-indigo-500 cursor-pointer transition-colors" 
  />
  <FaShoppingCart 
    onClick={() => handleAddToCartBasket(item)} 
    className="w-10 h-10 text-gray-700 hover:scale-110 transition-transform cursor-pointer" 
  />
</div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </>

  )
}

export default Pruducts