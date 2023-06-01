import Link from 'next/link'
import styles from './Navigation.module.css'
import logo_vaca from "../Images/logo-vaca.jpeg"
import Image from 'next/image'


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
    return(
        
        <header className={styles.header}>
          <div className={styles.navigation}>
            
            <Image src= {logo_vaca} width={80} height={70}/>
            
            
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
