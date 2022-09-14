import Characters from "./components/Characters/Characters";
import Character from "./components/Character/Character";
import Simpson from "./components/Simpsons/Simpson";
import Hero from "./components/Hero/Hero";

function App() {
  return (
      <div>
        <Characters/>
          <Hero id={1} name={"Rick Sanchez"} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
          <Hero id={2} name={"Rick Sanchez"} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
          <Hero id={3} name={"Rick Sanchez"} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
          <Hero id={4} name={"Rick Sanchez"} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
          <Hero id={5} name={"Rick Sanchez"} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
          <Hero id={6} name={"Rick Sanchez"} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
          <Hero id={7} name={"Rick Sanchez"} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
      </div>
  );
}

export default App;