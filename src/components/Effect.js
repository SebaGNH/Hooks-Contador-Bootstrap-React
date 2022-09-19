import React,{ Fragment, useState } from 'react'
import Contador from './Contador';

const Effect = () => {
  //useState Contador
  const [contador, setContador] = useState(0);
  
  //Mostrar Componente contador
  const [montarComponente, setMontarComponente] = useState(true);  

  return (
    <Fragment>
      <div className="card border-success mb-3" >
        <div className="card-header">useEffect</div>
        {montarComponente?        
          <Contador
            contador={contador}
            setContador={setContador}
            setMontarComponente={setMontarComponente}
          />
        :
          <div className="btn-group m-5" role="group" aria-label="Basic example">
            <button 
              type="button" 
              className="btn btn-warning btn-lg"
              onClick={()=> setMontarComponente(true)}
              >Montar</button>
          </div>
        }
      </div>      
    </Fragment>
  );
}
export default Effect;
