import React,{Fragment,useState,useEffect} from 'react';

const Effect = ({setMontarComponente}) => {
  //useState Contador
  const [contador, setContador] = useState(0);
  
  //useEffect - Se ejecuta cada vez que el componente se renderiza
  useEffect( () => {
    console.log('Componente Renderizado');
  });

  useEffect( () => {
    console.log('Carga solo por primera vez');
  },[]);

  //Update
  useEffect( () => {
    console.log('Solo cuando el componente se actualiza');
  },[contador]);

  //Desmontado - Cerrar conecciones
  useEffect( () => {
    //console.log('Componente Renderizado');
    return ( () =>{
      console.log("Componente Desmontado")
    });
  },[]); //No olvidar el arreglo vacío 

  return (
    <Fragment>
      <div className="card-body">
        <h4 className="card-title mb-4">Contador {contador}</h4>
        <div className="btn-group" role="group" aria-label="Basic example">

          <button 
            type="button" 
            className="btn btn-primary btn-lg"
            onClick={()=> setContador(contador + 1)}
            >Incrementar</button>

          <button 
            type="button" 
            className="btn btn-success btn-lg"
            onClick={()=> setContador(0)}
            >Reiniciar</button>
          
          <button 
            type="button" 
            className="btn btn-primary btn-lg"
            onClick={()=> setContador(contador - 1)}
            >Decrementar</button>

          </div>


          <div className="btn-group mt-4" role="group" aria-label="Basic example">

            <button 
              type="button" 
              className="btn btn-danger"
              onClick={()=> setMontarComponente(false)}
              >Desmontar</button>

          </div>
        </div>
    </Fragment>
  );
}
export default Effect;