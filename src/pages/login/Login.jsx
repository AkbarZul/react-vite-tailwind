import React from "react";
import { LogoBlanja } from "../../assets";
import { TextField, Typography, styled, Button } from "@mui/material";

const login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row items-center">
          <img
            src={LogoBlanja}
            alt="Blanja Logo"
            style={{ width: "35px", height: "50px" }}
          />
          <Typography
            sx={{ color: "#DB3022", fontSize: "28px", fontWeight: "bold", margin: "10px 0 0 10px" }}
          >
            Blanja
          </Typography>
        </div>

        <div className="flex flex-col items-center mt-4">
          <TextField />
          <TextField />
          <Button>Login</Button>
        </div>
      </div>
    </>
  );
};

export default login;
