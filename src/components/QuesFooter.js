import React from "react";
import { Button } from "@mui/material";

export default function QuesFooter(props) {

  return (
    <div className="ques-footer">
      <Button variant="contained" color="primary"
        onClick={()=>{props.onClick(-1)}}
      >
        Previous
      </Button>
      <Button variant="contained" color="primary"
        onClick={()=>{props.onClick(1)}}
      >
        Next
      </Button>
    </div>
  );
}
