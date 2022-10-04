import {useReducer, useRef} from "react";

import {Cat, Dog} from "./components";
import {reducer} from "./reducers";

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const catInput = useRef();
    const dogInput = useRef();

    const createCat = () => {
        dispatch({type: 'addCat', payload: catInput.current.value})
        catInput.current.value = '';
    }
    const createDog = () => {
        dispatch({type: 'addDog', payload: dogInput.current.value})
        dogInput.current.value ='';
    }

    return (
        <div style={{display:'flex', justifyContent: 'space-around'}}>
            <div className={"cats"}>
                <input type="text" placeholder={'Add cat'} ref={catInput}/>
                <button onClick={createCat}>Save</button>
                {
                    state.cats.map(cat => <Cat cat={cat} key={cat.id} dispatch={dispatch}/>)
                }
            </div>

            <div className={'dogs'}>
                <input type="text" placeholder={'Add dog'} ref={dogInput}/>
                <button onClick={createDog}>Save</button>
                {
                    state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)
                }
            </div>

        </div>
    );
}

export default App;