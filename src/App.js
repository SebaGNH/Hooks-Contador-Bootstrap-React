import EffectMontar from "./components/EffectMontar";
import Reducer from "./components/Reducer";
import IsLoading from "./components/IsLoading";
import Personalizados from "./components/Personalizados";



function App() {
  return (
    <div className='container'>
      <EffectMontar/>
      <Reducer/>
      {/* <IsLoading/> */}
      <Personalizados/>
    </div>
  );
}

export default App;
