import React,{ Fragment, useState } from 'react'
import EffectContador from './Effect';

const Effect = () => {

  //Mostrar Componente contador
  const [montarComponente, setMontarComponente] = useState(true);  

  return (
    <Fragment>
      <div className="card border-success mb-3" >
        <div className="card-header">useEffect</div>

        {montarComponente?        
          <EffectContador
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
