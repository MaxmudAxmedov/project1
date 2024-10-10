import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { Search } from "../../../assets/search";
import InputAdornment from '@mui/material/InputAdornment';

const Input = styled(TextField)`
  width: 599px;
  baground-color: #fff;
`;

export const SearchInput = () => (
  <Input
    variant="filled"
    label="Поиск по товарам"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <Search />
        </InputAdornment>
      ),
    }}
  />
);
