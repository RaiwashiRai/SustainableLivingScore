import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

export default function Points() {
  return (
    <Box sx={{ "& > :not(style)": { m: 0.4 } }} className="points">
      <Fab size="small" color="error" aria-label="1">
        1
      </Fab>
      <Fab size="small" color="warning" aria-label="1">
        2
      </Fab>
      <Fab size="small" color="success" aria-label="1">
        3
      </Fab>
      <Fab size="small" color="info" aria-label="1">
        4
      </Fab>
      <Fab size="small" color="secondary" aria-label="1">
        5
      </Fab>
    </Box>
  );
}
