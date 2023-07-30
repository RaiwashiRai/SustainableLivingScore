import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
  }
}));

export default function QuesHeader() {
  return (
    <div className="ques-header">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3> SRI </h3>
        <h3 style={{ color: "rgba(7, 251, 101, 1)" }}>2/25</h3>
      </div>
      <BorderLinearProgress
        variant="determinate"
        value={(20 / 25) * 100}
        sx={{ color: "rgba(7, 251, 101, 1)" }}
        size="2rem"
      />
    </div>
  );
}
