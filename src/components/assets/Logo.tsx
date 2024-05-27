import { useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme, Theme } from "@mui/material/styles";
import React from "react";

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  width?: number;
  height?: number;
}
export const Logo = ({ color, width, height }: LogoIconProps) => {
  const theme = useTheme<Theme>();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 566 222"
      width={width || isPhone ? "102" : "142"}
      height={height || isPhone ? "40" : "56"}
    >
      <path
        style={{ fill: color || grey[300] }}
        d="m21.3 36.7c3.1-21.9 23.3-37.2 45.2-34.1l118.8 16.7c21.9 3.1 37.2 23.3 34.1 45.2l-16.7 118.8c-3.1 21.9-23.3 37.2-45.2 34.1l-118.8-16.7c-21.9-3.1-37.2-23.3-34.1-45.2z"
      />
      <path
        style={{ fill: color ? theme.palette.secondary.main : grey[900] }}
        d="m21 60c0-22.1 17.9-40 40-40h100c22.1 0 40 17.9 40 40v100c0 22.1-17.9 40-40 40h-100c-22.1 0-40-17.9-40-40z"
      />
      <path
        style={{ fill: color || theme.palette.primary.contrastText }}
        d="m89.5 117.1l-18.8 18.7q-1.5 1.5-3 2.6-1.5 1-3.3 1-2.4 0-4.9-2.5-1.6-1.6-2.2-2.8-0.6-1.3-0.6-2.5 0-1.7 1.1-3.2 1.1-1.5 2.5-2.9l14.7-14.4-14.8-14.7q-1.4-1.4-2.4-2.9-1.1-1.5-1.1-3.3 0-2.4 2.6-4.9 2.7-2.8 5.1-2.8 1.8 0 3.3 1.1 1.5 1.1 2.8 2.5l18.9 18.7q1.6 1.6 2.6 3 1.1 1.4 1.1 3.2 0 1.8-1.2 3.4-1.2 1.5-2.4 2.7zm80 29.8h-49.2q-3.8 0-6.3-1.3-2.4-1.4-2.4-5.9 0-5 2.4-6.2 2.4-1.3 6.3-1.3h49.2q3.7 0 6.2 1.3 2.5 1.3 2.5 6.2 0 4.5-2.6 5.9-2.5 1.3-6.1 1.3z"
      />
      <path
        style={{ fill: color || theme.palette.primary.contrastText }}
        d="m294.3 39.3q3.5 0 6.2 2.2 2.8 2.2 4.9 8l7.8 20.7h1.1l8.2-28.7q1.3-4.4 3.9-7.5 2.7-3.2 7.4-3.2 5.1 0 7.3 3.3 2.4 3.2 2.4 7.6 0 2-0.6 3.9-0.5 1.9-1.2 3.8l-16.2 43.2q-2.9 7.3-5.1 9.3-2.1 2.1-6.1 2.1-4.1 0-6.6-2.1-2.4-2-5.2-9.3l-7.6-26.4h-1.2l-7.9 26.4q-2.7 7.3-4.9 9.3-2.2 2.1-6.1 2.1-4.1 0-6.6-2.1-2.5-2-5.3-9.3l-16.4-43.2q-0.6-1.8-1.2-3.8-0.5-2-0.5-4 0-4.7 2.4-7.8 2.5-3 8-3 4.1 0 6.6 3.3 2.6 3.2 3.9 7.4l9.2 28.7h1.2l6.7-20.7q1.9-5.8 4.9-8 3.1-2.2 6.6-2.2zm119.5 18.4v4.6q0 3.5-1.8 6.4-1.8 2.8-8.6 2.8h-29.2v7q0 4 2.1 7.5 2.1 3.4 7 3.4 3.9 0 5.7-1.3 1.7-1.3 3-3.4 0.8-1.2 2-2.2 1.2-1 3.3-1.6 2.1-0.8 6-0.8 3.9 0 6.7 1.6 2.8 1.4 2.8 5.7 0 4.8-3 8-3 3.2-7.6 5.1-4.5 1.9-9.9 2.7-5.2 0.8-9.8 0.8-6.1-0.1-11.6-1.5-5.5-1.5-9.7-4.7-4.2-3.2-6.7-8.4-2.5-5.2-2.5-12.8v-17.1q0-6.9 1.7-11.8 1.7-4.9 4.2-8.1 2.7-3.2 5.9-5 3.3-1.8 6.7-2.7 3.4-0.8 6.4-1.1 3.1-0.2 5.3-0.2 7.4 0 12.6 1.3 5.2 1.3 8.7 3.5 3.6 2.1 5.6 4.9 2.1 2.7 3.1 5.7 1 2.9 1.3 6 0.3 3.1 0.3 5.7zm-39.6-2.3v5.1h18.4q0-4.8-0.6-7.9-0.4-3.2-2.4-4.8-2-1.7-6.7-1.7-5.4 0-7 3-1.7 2.8-1.7 6.3zm54.5 32v-69.2q0-4.6 0.8-8.4 0.8-3.8 3.1-6.1 2.4-2.2 7.1-2.2 4.9 0 7.4 2.2 2.4 2.2 3.1 6 0.8 3.8 0.8 8.5v25q1.5-5 5.3-8.6 3.9-3.7 10.5-3.7 4.1 0 8.1 1.3 4 1.3 7.2 4.3 3.3 3.1 5.2 8.1 2.1 4.9 2.1 12.2v21.3q0 7.2-2.1 12.2-1.9 4.9-5.2 8-3.2 3.1-7.2 4.4-4 1.3-8.1 1.3-6.6 0-10.5-3.7-3.8-3.8-5.3-8.6 0 2.9-0.9 5.8-0.8 2.8-3.2 4.7-2.4 1.8-7.2 1.8-5 0-7.4-2.2-2.2-2.3-2.9-6-0.7-3.8-0.7-8.4zm38.1-11.2v-17.8q0-4.1-1-7.2-1-3.2-5.4-3.2-3.7 0-5.7 2.9-2.1 2.9-2.9 6.9-0.8 3.9-0.8 7.4 0.1 5.6 0.4 9.7 0.5 4.1 1.5 6.7 2.1 5.3 7.5 5.3 4.4 0 5.4-3.3 1-3.2 1-7.4z"
      />
      <path
        style={{ fill: color || theme.palette.primary.contrastText }}
        d="m272.3 155.9q0 3.1 3.8 5.3 3.8 2.2 8 4.3 5.2 2.5 10.1 5.5 4.8 3 7.9 7.1 3.1 4.2 3.1 10.5 0 4.3-1.2 7.8-2.7 6.6-8.4 9.9-1.4 0.8-2.9 1.4-1.5 0.6-3 1.1-3.1 1-6.4 1.4-3.2 0.4-6 0.4-5.8 0-9.9-1-4.1-0.9-7.1-2.5-3-1.6-4.9-3.6-2.8-2.8-3.9-6.2-1.2-3.3-1.2-6.3 0-8.5 10-8.5 3.6 0 6 1.9 2.3 2 2.5 6.4 0.1 2.8 2.7 3.7 2.7 1 5.6 1 2.9 0 4.6-1.5 1.9-1.5 1.9-3.9 0-2.9-2.2-5.1-2.1-2.3-5.4-4.2-3.2-1.9-6.5-3.8-4.6-2.4-8.9-5.2-4.3-2.8-7.1-6.5-2.8-3.7-2.8-8.8 0-5.7 1.9-9.5 1.9-3.9 5.5-6.3 3.6-2.3 8.7-3.4 5.2-1 11.8-1.1h1.1q5.8 0 10.1 1 4.2 1 6.9 2.7 2.7 1.6 4.4 3.7 2.2 2.8 2.7 5.8 0.7 3 0.7 5.5 0 4.3-3.2 5.9-3.2 1.4-7.5 1.6-3.2 0-5.5-1.9-2.3-2-2.3-4.3-0.1-2.7-2.2-4.2-2.1-1.5-5.1-1.5-2.6 0-4.5 1.3-1.9 1.1-1.9 4.1zm48.6 37.7v-69.9q0-4.4 0.7-8.1 0.8-3.7 3.3-5.9 2.4-2.2 7.1-2.2 4.9 0 7.2 2.2 2.4 2.2 3.2 5.9 0.8 3.7 0.8 8.1v69.9q0 4.5-0.8 8.2-0.8 3.7-3.2 6-2.3 2.2-7.2 2.2-4.7 0-7.1-2.2-2.5-2.3-3.3-6-0.7-3.7-0.7-8.2zm99.5-40.1v39.9q0 4.6-0.7 8.4-0.7 3.7-3 6-2.3 2.2-7.3 2.2-4.8 0-7.2-1.8-2.4-1.9-3.3-4.7-0.8-2.9-0.8-5.8-1.5 4.8-5.3 8.6-3.8 3.7-10.5 3.7-4 0-8.1-1.3-4-1.3-7.2-4.4-3.2-3.1-5.3-8-2-5-2-12.2v-21.3q0-7.3 2-12.2 2.1-5 5.3-8.1 3.2-3 7.2-4.3 4.1-1.3 8.1-1.3 6.7 0 10.5 3.7 3.8 3.6 5.3 8.6 0-6.7 3.3-9.6 3.3-2.8 8-2.8 4.7 0 7.1 2.2 2.3 2.3 3.1 6.1 0.8 3.8 0.8 8.4zm-38.1 10.9v17.8q0 4.2 1 7.4 1 3.3 5.4 3.3 5.4 0 7.5-5.3 1-2.6 1.4-6.7 0.4-4.1 0.5-9.7 0-3.5-0.8-7.4-0.8-4-2.9-6.9-2-2.9-5.7-2.9-4.4 0-5.4 3.2-1 3.1-1 7.2zm106-9.2l-16.2 43.4q-2.7 7.2-5 9.3-2.3 2.1-6.2 2.1-4 0-6.5-2.1-2.4-2-5.2-9.3l-16.5-43.4q-0.7-1.7-1.3-3.7-0.5-2.1-0.5-4 0-4.6 2.5-7.7 2.5-3 7.9-3 4 0 6.8 3.2 2.9 3.2 4.1 7.3l8.2 26.7h1.1l7.6-26.7q1.1-4 3.9-7.2 2.9-3.3 7.4-3.3 5.1 0 7.3 3.2 2.4 3.2 2.4 7.6 0 3.5-1.8 7.6zm70.9-1.7v39.9q0 4.6-0.6 8.4-0.7 3.7-3 6-2.3 2.2-7.4 2.2-4.7 0-7.1-1.8-2.4-1.9-3.3-4.7-0.8-2.9-0.8-5.8-1.5 4.8-5.3 8.6-3.8 3.7-10.6 3.7-4 0-8-1.3-4-1.3-7.3-4.4-3.2-3.1-5.2-8-2-5-2-12.2v-21.3q0-7.3 2-12.2 2-5 5.2-8.1 3.3-3 7.3-4.3 4-1.3 8-1.3 6.8 0 10.6 3.7 3.8 3.6 5.3 8.6 0-6.7 3.3-9.6 3.3-2.8 7.9-2.8 4.8 0 7.2 2.2 2.3 2.3 3 6.1 0.8 3.8 0.8 8.4zm-38.1 10.9v17.8q0 4.2 1.1 7.4 1 3.3 5.4 3.3 5.4 0 7.5-5.3 1-2.6 1.4-6.7 0.4-4.1 0.5-9.7 0-3.5-0.8-7.4-0.8-4-2.9-6.9-2-2.9-5.7-2.9-4.4 0-5.4 3.2-1.1 3.1-1.1 7.2z"
      />
    </svg>
  );
};
