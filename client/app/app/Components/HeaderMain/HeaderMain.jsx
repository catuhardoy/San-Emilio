'use client'
import styles from "./HeaderMain.module.css"
import Image from "next/image";
import logo_vaca from "../../Images/cow-icon.png"
import { Button } from "@mui/material";


export default function HeaderMain () {
    return (
  
      <main>
        {/* Otros elementos del encabezado */}
      
        <div className={styles.rodeos_container}>

          
          <div className={styles.section}>
          <Image  src= {logo_vaca} width={50} height={50}/> <br /> TOTAL ANIMALES:  1000</div>
          
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
          <div>
          <div>
            <section className={styles.section1}>
              <div className={styles.item}>
              <button className={styles.button}>TOTAL NACIMIENTOS <br />30</button>
              </div>
              
              <button className={styles.button}>TOTAL MUERTES <br />30</button>
              <button className={styles.button}> VAQUILLONAS 1ER SERVICIO<br />30</button>

              
            </section>

          </div>
          {/* <div>
            <br />
          <Button variant="contained" color="success" >Agregar </Button>
          </div> */}
          
          </div>
          </div>
          
        </div>
      </main>
    );
  }
  
  