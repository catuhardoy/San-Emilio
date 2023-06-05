'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Box, FormControl, InputLabel, Input, Select, MenuItem, Button, FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import TextField from '@mui/material';



export default function TransactionForm(){
//     const [state, setState] = useState(true)
//     const cowInfo = useSelector((state)=> state.transaction)

//     const [clickAdd, setClickAdd] = useState(null);

//     const [newTransaction, setNewTransaction] = useState({
//         typeTrasaction: "",
//         cowRoundUp : "",
//         race : "",
//         price: "",
//         weight: "",
//         auction: "",
//         caravan : "",
//         origin : "",
//         quantity: ""
//         //id?
//     });
//     const handleReset = ()=>{
//         setNewTransaction({
//         typeTrasaction: "",
//         cowRoundUp : "",
//         race : "",
//         price: "",
//         weight: "",
//         auction: "",
//         caravan : "",
//         origin : "",
//         quantity: ""
//             //id?
//         });
//     }

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
    
//         if (name === "weight" || name === "quantity") {
//           setNewTransaction({ ...setNewTransaction, [name]: Number(value) }); // Convertir el valor a número antes de establecerlo en el estado
//         } else {
//           setNewTransaction({ ...newTransaction, [name]: value });
//         }
//         setErrors(validate({ ...newTransaction, [name]: value }));
//       };

//       const [errors, setErrors] = useState({
//         typeTrasaction: "",
//         cowRoundUp : "",
//         race : "",
//         price: "",
//         quantity: ""
//       });
    
//       const handleClose = () => {
//         clickAdd && setState(!state);
//         clickAdd && window.location.reload();
//       };
    
//       const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//           // Enviar la solicitud POST a la API
//           const response = await axios.post("animal/", newTransaction);
//           console.log(response.data);
//         } catch (error) {
//           console.error(error.message);
//         }

// };
return(
  <div >
    <div>
      
      <h1 >Formulario de Transacción Ganadera</h1>
      {/* <form > */}
{/* 
      <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Compra" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Venta" />
  
</FormGroup> */}
      <Grid container justifyContent="center">
      <Grid item>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="medium" >
      <InputLabel id="demo-select-small-label" >Transaccion</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={age}
        label="Tipo"
        // onChange={handleChange}
      >
       <MenuItem value="">
          <em>seleccionar</em>
          </MenuItem>
        <MenuItem value="compra">Compra</MenuItem>
        <MenuItem value="venta">Venta</MenuItem>
        
      </Select>
    </FormControl>
    </Grid>
    </Grid>
    <br />
        {/* <label htmlFor="transaccion">Tipo de Transacción:</label>
        <select
          id="transaccion"
          value={tipoTransaccion}
          onChange={e => setTypeTransaction(e.target.value)}
        >
          <option value="">Seleccione</option>
          <option value="compra">Compra</option>
          <option value="venta">Venta</option>
        </select> */}
        <Grid container justifyContent="center">
         < Grid>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="medium">
      <InputLabel id="demo-select-small-label">Rodeo</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={age}
        label="Rodeo"
        // onChange={handleChange}
      >
       <MenuItem value="">
          <em>Seleccionar</em>
          </MenuItem>
        <MenuItem value="vaca">Vaca</MenuItem>
        <MenuItem value="vaquillona">Vaquillona</MenuItem>
        <MenuItem value="novillo">Novillo</MenuItem>
        <MenuItem value="toro">Toro</MenuItem>
        
      </Select>
    </FormControl>
        {/* <br /><br />
        <label htmlFor="cowRoundUp">Rodeo:</label>
        <select
          id="cowRoundUp"
          value={cowRoundUp}
          onChange={e => setCowRoundUp(e.target.value)}
        >
          <option value="">Seleccione</option>
          <option value="vaca">Vaca</option>
          <option value="vaquillona">Vaquillona</option>
          <option value="toro">Toro</option>
          <option value="novillo">Novillo</option>
        </select> */}
     <FormControl sx={{ m: 1, minWidth: 200 }} size="medium">
      <InputLabel id="demo-select-small-label">Raza</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={age}
        label="Raza"
        // onChange={handleChange}
      >
       <MenuItem value="">
          <em>seleccionar</em>
          </MenuItem>
        <MenuItem value="colorada">Colorada</MenuItem>
        <MenuItem value="negra">Negra</MenuItem>
        <MenuItem value="byn">Blanca y Negra</MenuItem>
        
      </Select>
    </FormControl>
    </Grid>
    </Grid>
        {/* <label htmlFor="race">Raza:</label>
        <select
          id="race"
          value={race}
          onChange={e => setRaza(e.target.value)}
        >
          
          <option value="">Seleccione</option>
          <option value="colorada">Colorada</option>
          <option value="negra">Negra</option>
          <option value="blanco y negro">Blanco y negro</option>

        </select> */}
        <br /><br />
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container justifyContent="center">
        <Grid>
      <FormControl variant="standard" sx={{ m: 1 }}>
        <InputLabel htmlFor="component-helper">Precio</InputLabel>
        <Input
          id="component-helper"
          defaultValue="$"
          aria-describedby="precio"
        />
        </FormControl>
        {/* <label htmlFor="precio">Precio:</label> */}
        {/* <input
          type="number"
          id="precio"
           value={price}
          onChange={e => setPrice(e.target.value)}
        /> */}
        
        {/* <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          value={cantidad}
          onChange={e => setCantidad(e.target.value)}
        /> */}
  
        <FormControl variant="standard" sx={{ m: 1 }}>
        <InputLabel htmlFor="component-helper">Peso</InputLabel>
        <Input
          id="component-helper"
          defaultValue="Kg"
          aria-describedby="Peso"
        />
        </FormControl>
        </Grid>
        </Grid>
        {/* <label>Peso:</label>
        <input
          type="string"
          id="auction"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        /> */}
         <br /><br />
       <Grid container justifyContent="center">
       <Grid>
      <FormControl variant="standard" sx={{ m: 1 }}>
        <InputLabel htmlFor="component-helper">Remate</InputLabel>
        <Input
          id="component-helper"
          // defaultValue="Remate"
          aria-describedby="remate"
        />
        </FormControl>
         {/* <label>Remate:</label>
        <input
          type="string"
          id="auction"
          value={auction}
          onChange={e => setAuction(e.target.value)}
        /> */}
        <FormControl variant="standard" sx={{ m: 1 }}>
        <InputLabel htmlFor="component-helper">Caravana</InputLabel>
        <Input
          id="component-helper"
          // defaultValue="Caravana"
          aria-describedby="Caravana"
        />
        </FormControl>
        </Grid>
        </Grid>
          {/* <label>Caravana:</label>
        <input
          type="string"
          id="caravan"
          value={caravan}
          onChange={e => setCaravan(e.target.value)}
        /> */}

</Box>
<br />
<br />
          <Grid  container justifyContent="center">
        <Button variant="contained" color="success" container justifyContent="center" > Enviar </Button>
        </Grid>
        {/* <button type="submit">Enviar</button> */}
      {/* </form> */}
    </div>


  </div>
  );
}
 