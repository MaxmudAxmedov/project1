import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../config/mui-config";
import { Button } from "@mui/material";

export const LinkBtn = styled(Link)
`color: ${theme.palette.primary.main};
text-decoration: underline;
&:hover{
    color: ${theme.palette.primary[700]};
`


export const SecondButton = styled(Button)`
  background-color: ${theme.palette.secondary.main};
  &:hover{
        background-color: ${theme.palette.secondary[700]};
  `