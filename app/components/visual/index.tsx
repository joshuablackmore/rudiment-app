import React from "react";
import { CircularProgress } from "@mui/material";

export type VisualStatsProps = {
  cred: number;
  complexity: number;
  rating: number;
};

const VisualStats: React.FC<VisualStatsProps> = ({
  cred,
  rating,
  complexity,
}) => {
  return (
    <div className="flex items-center justify-center h-full">
      <CircularProgress
        data-testId="progress-1"
        className="relative"
        size={200}
        value={cred}
        variant="determinate"
        sx={{
          color: "#59bbf0",
        }}
      />

      <CircularProgress
        data-testId="progress-2"
        className="absolute"
        size={150}
        value={complexity}
        variant="determinate"
        sx={{
          color: "#6bb120",
        }}
      />
      <CircularProgress
        data-testId="progress-3"
        className="absolute"
        size={105}
        value={rating}
        variant="determinate"
        sx={{
          color: "#fbd416",
        }}
      />
    </div>
  );
};

export default VisualStats;
