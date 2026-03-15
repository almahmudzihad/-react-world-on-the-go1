
import { Suspense } from 'react';
import './App.css'
import Countries from './component/countries/Countries'

function App() {
  const countryPromis= fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());
  return (
    <>

    <h2>Country on the go app component</h2>
    <Suspense fallback={<h2>Loding...</h2>}>

      <Countries countryPromis={countryPromis}></Countries>
    </Suspense>
    </>
  )
}

export default App
