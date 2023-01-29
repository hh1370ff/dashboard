import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { Box } from "@mui/material";

const SearchBar = ({ placeholder, handleChange, searchBarWidth }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <SearchIcon />
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        sx={{ width: searchBarWidth }}
        disableUnderline
      />
    </Box>
  );
};

export default SearchBar;
