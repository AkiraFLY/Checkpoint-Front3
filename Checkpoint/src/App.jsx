import { useState } from 'react'
import styles from './app.module.css'
import { Colored } from './componentes/Colored';

function App() {
  const [colorsList, setColorList] = useState([]);
  const [colorName, setColorName] = useState('');
  const [colorCor, setColorCor] = useState('');
  const [error, setError] = useState('');

  const handleColorSubmit = (event) => {
    event.preventDefault();


    const newColor = {name: colorName, color:colorCor};
    setColorList((state) => [...state, newColor]);

    if (colorName === '' || colorCor === '') {
      setError('Por favor, verifique os dados inseridos no formulário');
    } else {
      setError('');

    }
  }

  console.log(...colorsList)


  return (

    <>

  <main className={styles.main}>

    <div className={styles.divContainer}>
    <h1>Adicionar nova cor</h1>

    {error && <p className={styles.errorMsg}>{error}</p>}

    <form className={styles.formContainer} onSubmit={() => {handleColorSubmit}}>
    
    <input className={styles.inputContainer}
    type="text" 
    nome='colorName'
    id='colorName'
    placeholder='Put the color name here'
    onChange={(event) => {
      setError('');
      setColorName(event.target.value);}}
    value={colorName}
    />
    
    <input className={styles.inputContainer}
    type="text"
    name="colorCor"
    id="colorCor"
    placeholder='Put the your color in Hex'
    onChange={(event) => {
      setError('');
      setColorCor(event.target.value);
    }}
    value={colorCor}
     />
    
    </form>
    
    <button className={styles.buttonStyle} 
    type="submit"
    disabled={colorName === '' && colorCor === ''}
    
    >Adicionar</button>


    </div>
    <section>
      <h2>Colors Favorite</h2>
      <div>
       {colorsList && (
        colorsList.map((color, index) =>{
          return(
            <Colored key={index} color={color}/>
          )
        })
       )}

      </div>

    

    </section>


  </main>


    </>
  )
}

export default App
