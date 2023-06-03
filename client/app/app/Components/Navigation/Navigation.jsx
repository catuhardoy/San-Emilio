'use client'
import Link from 'next/link'
import styles from '../Navigation/Navigation.module.css'
import logo_vaca from '../../Images/logo-vaca.jpeg'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

  export default function Navigation() {

    let arrayRodeos = [
      "VACAS",
      "TOROS",
      "NOVILLOS",
      "VAQUILLONAS"
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false); // Cierra el menú de especialidades cuando se hace clic fuera de él
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = () => {
      setIsMenuOpen(false);
    };

    return(
       <>
          <div className={styles.container__navbar}>
            
            <div className={styles.container__logo}>
              <Link href="/">
                 SAN EMILIO<Image src={logo_vaca} alt="Logo Vaca" />
              </Link>
            </div>

            <ul>
            <button
            ref={menuRef}
            className={styles.button__ul}
            onClick={toggleMenu}
            style={
              isMenuOpen
                ? {
                    backgroundColor: "#639cc7",
                    color: "#fff",
                    height: "100%",
                    borderRadius: "0",
                    border: "none",
                  }
                : {}
            }
            // onClick={toggleMenu}
          >
            RODEOS
          </button>

              <Link href="/transacciones/">TRANSACCIONES</Link>
              <Link href="/graficos/">GRAFICOS</Link>

            </ul>
           
          
        </div>

    {isMenuOpen && (
    <div className={styles.container__rodeos} ref={menuRef}>
    <ul>
      {arrayRodeos.map((rodeo) => (
        <li key={rodeo} style={{ listStyleType: "none" }}>
          <Link href="/rodeos/" onClick={handleMenuClick}>{rodeo}</Link>
        </li>
      ))}
    </ul>
  </div>
)}
</>
    )
   }
