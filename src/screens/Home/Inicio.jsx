import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/slices/productosState/thunks';




export const Inicio = () => {

  const dispatch = useDispatch();
  const {isLoading, page, productos = []} = useSelector ((state) => state.productosState )
  //const { isLoading, productos = [] }= useSelector ( state => state.productosState );

  useEffect(() => {
    dispatch (getProducts());
  
  }, [])



  return (
    <>
        
    
        <div className="overflow-y-auto max-h-full">
      <table className="">
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-black">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-black">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-black">Precio</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-black">Enlace</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-black">Imagen</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productos.slice(0, 10).map((producto) => (
            <tr key={producto.id}>
              <td className="px-6 py-4 whitespace-nowrap bg-emerald-800">{producto.id}</td>
              <td className=" text-center bg-emerald-800">{producto.title}</td>
              <td className="px-6 py-4 whitespace-nowrap  bg-emerald-800">{producto.price}</td>
              <td className="px-6 py-4 whitespace-nowrap  bg-emerald-800"><a href={producto.permalink} className="text-blue-500">Ver enlace</a></td>
              <td className="px-6 py-4 whitespace-nowrap  bg-emerald-800"><img src={producto.thumbnail} alt={producto.title} className="w-20 h-20 object-cover" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
    </>
  )

}
