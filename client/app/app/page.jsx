import styles from './page.module.css'
import HeaderMain from './Components/HeaderMain/HeaderMain'
import BirthDeathForm from './Components/BirthDeathForm/BirthDeathForm'


// async function getCowRoundUp(){
//   const res = await fetch("https://reqres.in.api/users");
//   const data = await res.json();
//   console.log(data);
// }

// pedimos los datos de los rodeos y los mostramos por consola.

export default function Home() {
  return (
   
   <div className={styles.container}>
    
    <div className={styles.content}>
    <HeaderMain/>
  
    </div>
    

   </div>
  )
}
