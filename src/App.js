import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import starImage from './assets/star.jpg'
import {uuid} from "uuidv4";
import styled from "styled-components";

const starObj = {
    url: starImage
}
function App() {
    const [counter, setCounter] = useState(0);
    const [stars, setStars] = useState([]);
    const handleCounter = (e) => {
        switch (e.target.value) {
            case "remove":
                if (counter > 0) {
                    setCounter(counter - 1);
                    let _stars = stars;
                    stars.pop();
                    setStars(_stars);
                }
                break;
            case "add":
                setCounter(counter + 1);
                setStars([...stars, starObj]);
                break;
        }
    }
    const renderStars  = stars.map((star, index)=>{
        return <img src={star.url} alt="" key={index + counter}/>
    })
    return (
        <div className="App">
            <Header>
                <p>LOGO</p>
                <p>menu</p>
            </Header>
            <InputSection>
                <button value={"remove"} onClick={e => handleCounter(e)}>Remove 1</button>
                <p>{counter}</p>
                <button value={"add"} onClick={e => handleCounter(e)}>Add 1</button>
            </InputSection>
            <StarSection>
                {renderStars}
            </StarSection>
        </div>
    );
}

const Header = styled.header`
  display: flex;
  //width: 100%;
  height: 50px;
  background-color: red;
  color: black;
  padding: 0 10px 0 10px;
  p:nth-child(2){
    margin-left: auto;
  }
`
const InputSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`
const StarSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  img{
    width: 60px;
  }
`

export default App;
