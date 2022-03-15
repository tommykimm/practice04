import {Body, Box, Button, Click} from './styles/styles';
import {useState} from 'react';
import { useSelector, useDispatch} from "react-redux";
import { decrement, increment} from  './features/counterSlice';


function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const[color, setColor] = useState('lightgray')
    const[option, setOption] = useState(true)
    function Option(){
        setOption(!option);
        color==='lightgray' ? setColor('white'): setColor('lightgray');
    }

  return (
    <Body color ={color}>
        <Box>
            <h1>The Count is: yo! {count} </h1>
            <Button>
                <Click onClick={() => dispatch(increment())}> +1</Click>
                <Click onClick={() => dispatch(decrement())}> -1</Click>
                <Click onClick={() => {Option()}}>🙃</Click>
            </Button>
        </Box>
    </Body>
  );
}

export default App;

