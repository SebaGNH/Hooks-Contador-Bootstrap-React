import React, {useState, useEffect} from 'react'

//En el Hook personalizado no devolvemos código jsx
//No lleva llaves '{}' para extraer 
const useGetArticulo = (tiempo) => {
  //Artículos
  const [articulos,setArticulos] = useState([]);

  //loading
  const [isLoading, setIsLoading] = useState(true);

  //Simulamos una llamada a base de datos
  useEffect(()=>{
    setTimeout(()=>{
      setArticulos(
        [
          { id: 1, titulo: '#1 - Titulo del Primer Artículo'},
          { id: 2, titulo: '#2 - Titulo del Segundo Artículo'},
          { id: 3, titulo: '#3 - Titulo del Tercer Artículo'}
        ]
      );

      setIsLoading(false);
    },tiempo);
  },[]);  

  //Queremos devolver los estados de 'articulos, isLoading'
  return [articulos, isLoading];
}
export default useGetArticulo;