import React,{Fragment,useReducer} from 'react';

//Acción {tipo: 'INCREMENTAR'}

//Estado inicial del reducer
const contadorInicial = {
  contador: 0
}

//reducer es una función que escucha la acción "tipo:" que ejecuta el dispatch y en base a ella es lo que va a hacer
//estado < que va a modiciar y la acción que va a realizar
const reducer = (estado, accion) => {
  switch (accion.tipo) { //Si la acción .tipo es igual a '', ejecuta
    case 'INCREMENTAR':   return {  contador: estado.contador + 1  }
    case 'REINICIAR':   return {  contador: 0  }
    case 'DECREMENTAR':   return {  contador: estado.contador - 1  }
  }
}


const Reducer = () => {

  //estado contiene el valor, como el useState
  const [estado, dispatch] = useReducer(reducer,contadorInicial);


  return (
    <Fragment>
      <div className="card border-success mb-3" >
          <div className="card-header">useReducer</div>
        <div className="card-body">
          <h4 className="card-title mb-4">Contador {estado.contador}</h4>
          <div className="btn-group" role="group" aria-label="Basic example">

            {/* Boton Incrementar */}
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={()=> dispatch({tipo:'INCREMENTAR'})}
              >Incrementar</button>

            {/* Boton Reiniciar */}
            <button 
              type="button" 
              className="btn btn-success btn-lg"
              onClick={()=> dispatch({tipo:'REINICIAR'})}
              >Reiniciar</button>
            

            {/* Boton Decrementar */}
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={()=> dispatch({tipo:'DECREMENTAR'})}
              >Decrementar</button>
            
            </div>
          </div>
        </div>
    </Fragment>
  );
}
export default Reducer;

