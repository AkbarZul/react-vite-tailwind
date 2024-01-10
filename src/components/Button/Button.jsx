import React from 'react'
import { Button } from "@mui/material";

const Buttons = ({ onclick, variant, children }) => {
  return (
    <Button onclick={onclick} variant={variant}>
        {children}
    </Button>
  )
}

export default Buttons