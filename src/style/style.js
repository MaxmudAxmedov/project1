import styled from "@emotion/styled";
import { theme } from "../config/mui-config";

export const Badge = styled.div`
  background-color: ${theme.palette.primary.main};
  color: #fff;
  padding: 3px 20px;
  font-weight: 700;
  display: inline-block;
    &:hover{
        background-color: ${theme.palette.primary[700]};
    `;
