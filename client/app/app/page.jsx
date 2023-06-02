import styles from './page.module.css'
import Header from './Components/HeaderCows/HeaderCows'
import HeaderCows from './Components/HeaderCows/HeaderCows'

// async function getCowRoundUp(){
//   const res = await fetch("https://reqres.in.api/users");
//   const data = await res.json();
//   console.log(data);
// }

// pedimos los datos de los rodeos y los mostramos por consola.

export default function Home() {
  return (
   
   <div>
   <HeaderCows/>
   </div>
  )
}
