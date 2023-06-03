'use client'
import Link from 'next/link'
import styles from '../Navigation/Navigation.module.css'
import logo_vaca from '../../Images/logo-vaca.jpeg'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'



 

// const inter = Inter({ subsets: ['latin'] })
const links = [{
    label: 'HOME',  
    route: '/'
  },{
    label: 'RODEOS',  
    route: '/rodeos'
  },
  {
    label: 'TRANSACCIONES',  
    route: '/transacciones'
  },
  {
    label: 'GRAFICOS',  
    route: '/graficos'
  },]



  export default function Navigation() {

    // let arrayRodeos = [
    //   "Vacas",
    //   "Toros",
    //   "Novillos",
    //   "Vaquillonas",
    //   "Terneros"

    // ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  

    return(
       
          <div className={styles.navigation}>
            <p>SAN EMILIO</p>

        <nav>
          <ul className={styles.links}>
            {links.map((label, route)=>(
              <li key={route}>
                <Link href={label.route} >
                  {links.label}
                  </Link> 
              </li>
            ))} 
               <li className={rodeos_m}>
          <button onClick={toggleMenu}>RODEOS</button>
          {isMenuOpen && (
            <ul className="rodeos-menu">
              <li>Rodeo 1</li>
              <li>Rodeo 2</li>
              <li>Rodeo 3</li>
            </ul>
          )}
        </li>
            </ul> 
          </nav>
        </div>
       
     
    )
   }


//    {isMenuOpen && (
//     <div className={styles.container__especialitys} ref={menuRef}>
//       <ul>
//         {arrayRodeos.map((rodeo) => (
//           <li key={rodeo} style={{ listStyleType: "none" }}>
//             <Link to={`/rodeos/${rodeo}`}>{rodeo}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )}
// </>