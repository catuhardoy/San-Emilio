import Link from 'next/link'
import styles from './Navigation.module.css'
import logo from "../Images/logo-vaca.jpeg"


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
  },]

  export default function Navigation() {
    return(
        
        <header className={styles.header}>
          <div className={styles.navigation}>
            
            <img src={logo} alt = "logo" className={styles.logo} />
            
            
        <nav>
          <ul className={styles.links}>
            {links.map(({label, route})=>(
              <li key={route}>
                <Link href={route} >
                  {label}
                  </Link> 
              </li>
            ))}
            
            </ul>
          </nav>
        </div>
      </header>
    )
   }
