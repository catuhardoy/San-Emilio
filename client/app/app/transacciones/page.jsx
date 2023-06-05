import styles from "../transacciones/page.module.css"
import TransactionForm from "../Components/TransactionForm/TransactionForm"


export default function Transacciones() {
    return (
     <div className={styles.container}>
       <div className={styles.content}>
    <TransactionForm/>
    </div>
     </div>
    )
  }