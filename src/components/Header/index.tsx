import React from "react";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="logo" />
      <Typography variant="body1" component="p">
        Code Challenge
      </Typography>
    </header>
  );
}
