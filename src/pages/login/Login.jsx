import React from "react";
import { LogoBlanja } from "../../assets";
import { TextField, Typography, styled } from "@mui/material";
import Buttons from "../../components/Button";

const ButtonLogin = styled(Buttons)({
  backgroundColor: "#DB3022",
  width: "401px",
  height: "48px",
  color: "#FFFFFF",
  borderRadius: "25px"
})

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
          <ButtonLogin variant="contained">Login</ButtonLogin>
        </div>
      </div>
    </>
  );
};

export default login;
