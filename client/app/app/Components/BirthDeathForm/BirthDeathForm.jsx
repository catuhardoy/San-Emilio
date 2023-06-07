'use client'
import React, { useState } from 'react'
import styles from './BirthDeathForm.module.css'
import { useSelector } from 'react-redux'
import { Grid, Box, FormControl, InputLabel, Input, Select, MenuItem, Button} from '@mui/material';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; 

export default function BirthDeathForm(){
    
    return(
      <div className={styles.container} >
        <div>
          
          <h1 >Formulario de Nacimiento/Muertes</h1>
        
          <Grid container justifyContent="center">
          <Grid item>
            
          <FormControl sx={{ m: 1, minWidth: 200 }} size="medium" >
          <InputLabel id="demo-select-small-label" >Seleccionar</InputLabel>
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
            <MenuItem value="nacimiento">Nacimiento</MenuItem>
            <MenuItem value="muerte">Muerte</MenuItem>
            
          </Select>
        </FormControl>
       
        <Grid container justifyContent="center">
  
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Fecha" />
      </DemoContainer>
    </LocalizationProvider>
  </Grid>

        </Grid>
        </Grid>
        <br />
         
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
            <MenuItem value="ternero">Ternero</MenuItem>
            <MenuItem value="ternera">Ternera</MenuItem>
            
            
          </Select>
        </FormControl>
          
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
          {/* <FormControl variant="standard" sx={{ m: 1 }}>
            <InputLabel htmlFor="component-helper">Precio</InputLabel>
            <Input
              id="component-helper"
              defaultValue="$"
              aria-describedby="precio"
            />
            </FormControl> */}
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
          label="cantidad"
        //   onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={1}>10</MenuItem>
        </Select>
      </FormControl>
    </Box>
            </Grid>
            </Grid>
           
           <Grid container justifyContent="center">
           <Grid>
             
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
  
    </Box>
   
    <br />
              <Grid  container justifyContent="center">
            <Button variant="contained" color="success" container justifyContent="center" > Enviar </Button>
            </Grid>
            {/* <button type="submit">Enviar</button> */}
         
        </div>
    
    
      </div>
      );
    }
     