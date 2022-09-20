import React,{Fragment} from 'react';
import useGetArticulo from '../hooks/useGetArticulo';
const Personalizados = () => {

  //Hook Personalizado 
  //Extraemos articulos,isLoading y enviamos opcionalmente 2000 que es el tiempo para el setTimeOut
  const [articulos,isLoading] = useGetArticulo(2000);

  return (
    <Fragment>
      <div className="card border-success mb-3" >
        <div className="card-header">Hook Personalizado</div>
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
export default Personalizados;