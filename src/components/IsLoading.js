import React,{Fragment,useState,useEffect} from 'react';

//Código limpio, lo guardé de respaldo
const IsLoading = () => {
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
    },2000);
  },[]);
//console.log(articulos);

  return (
    <Fragment>
      <div className="card border-success mb-3" >
        <div className="card-header">Prueba isLoading</div>
        <div className="card-body">

        {
          isLoading?
            <p>Cargando...</p>
          :
        
          <div>
          {  
            articulos.map((articulo) => (
            <p key={articulo.id}>{articulo.titulo}</p>
            )) 
          }
          </div>
        }

        {
          isLoading &&
          <p>Cargando...usando &&</p>
        }

          </div>
        </div>
    </Fragment>
  );
}
export default IsLoading;