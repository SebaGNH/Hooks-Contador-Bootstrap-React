import React,{Fragment,useState} from 'react'


const Effect = () => {
  const [contador, setContador] = useState(0);

  return (
    <Fragment>
      <div className="card border-success mb-3" >
        <div className="card-header">Contador useEffect</div>
        <div className="card-body">
            <h4 className="card-title">Contador {contador}</h4>
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
        </div>
      </div>      
    </Fragment>
  );
}
export default Effect;

//style="max-width: 20rem;"