import { Select, MenuItem, SelectChangeEvent, FormControl, InputLabel } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react'
import Collaborators from './Experience/Collaborators';
import Open from './Experience/Open';
import Create from './Experience/Create';

const Experiences = () => {
  const [opt, setNumber] = useState<number>(3);

  return (
    <>
      {opt === 1 ?
        <Open />
        :
        opt === 2 ?
          <Create />
          :
          opt === 3 ?
            <Collaborators />
            :
            null}
    </>
  )
}

export default Experiences;