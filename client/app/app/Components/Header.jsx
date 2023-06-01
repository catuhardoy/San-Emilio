import styles from "../Components/Header.module.css"
import Image from "next/image";
import logo_vaca from "../Images/cow-icon.png"

export default function Header () {
  return (

    <header>
      {/* Otros elementos del encabezado */}
      <div className={styles.rodeos_container}>
        <div className={styles.button_container}>
          <div className={styles.item}>
            <Image  src= {logo_vaca} width={50} height={50}/>
            <button className={styles.button}>TOROS</button>
            <p>16</p>
            </div>
            <div className={styles.item}>
            <Image  src= {logo_vaca} width={50} height={50}/>
            <button className={styles.button}>VACAS</button>
            <p>370</p>
            </div>
            <div className={styles.item}>
            <Image  src= {logo_vaca} width={50} height={50}/>
            <button className={styles.button}>VAQUILLONAS</button>
            <p>260</p>
            </div>
            <div className={styles.item}>
            <Image  src= {logo_vaca} width={50} height={50}/>
            <button className={styles.button}>NOVILLOS</button>
            <p>180</p>
          </div>
        </div>
        {/* <h3 className={styles.container_nacimientos}>Nacimientos</h3> 
        <h3 className={styles.container_muertes}>Muertes</h3> */}
      </div>
    </header>
  );
}

