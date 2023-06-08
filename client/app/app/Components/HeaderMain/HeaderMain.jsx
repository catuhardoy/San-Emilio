import styles from "./HeaderMain.module.css"
import Image from "next/image";
import logo_vaca from "../../Images/cow-icon.png"
import BirthDeathForm from "../BirthDeathForm/BirthDeathForm";

export default function HeaderMain () {
    return (
  
      <main>
        {/* Otros elementos del encabezado */}
      
        <div className={styles.rodeos_container}>

          
          <div className={styles.section}>
          <Image  src= {logo_vaca} width={40} height={40}/> <br /> TOTAL ANIMALES:  1000</div>
          
          <div className={styles.button_container}>
            
            <div className={styles.item}>
              
              <button className={styles.button}>TOROS <br />16 </button>
              </div>
              <div className={styles.item}>
              <button className={styles.button}>VACAS <br />270 </button>
              </div>
              <div className={styles.item}>
             
              <button className={styles.button}> VAQUILLONAS <br />280 </button>
            
              </div>
              <div className={styles.item}>
  
              <button className={styles.button}>NOVILLOS <br />280 
              </button>
             
            </div>
            {/* <div className={styles.container_section}>
            <section className={styles.container_nacimientos}>
              <span> Nacimientos</span>
            <div className={styles.image_container}>
           
            </div>
            </section>
            <section className={styles.container_muertes}>
            <span> Muertes</span>
            <div className={styles.image_container}>
        
            </div>
            </section>
            </div> */}
          </div>
          
        </div>
      </main>
    );
  }
  
  