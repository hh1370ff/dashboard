import { Grid, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import BasicCard from "../../components/common/basicCard/BasicCard";
import CommonButton from "../../components/common/commonButton/CommonButton";
import SearchBar from "../../components/searchbar/SearchBar";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box } from "@mui/system";
import BasicSnackBars from "../../components/common/basicSnackBar/BasicSnackBar";
import NewUserModal from "../../components/modals/NewUserModal";

const Authentication = () => {
  /* searchBar and users and modal's states */
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [filtered, setFiltered] = useState([]);

  /* snackBars' states */
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState();
  const [openError, setOpenError] = useState();

  /* users' handlers */
  const addUser = (user) => {
    setUsers((pre) => [...pre, { ...user }]);
  };

  /* snackBars' handlers */
  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };
  const onSuccess = () => {
    setOpenSuccess(true);
  };
  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  const onError = () => {
    setOpenError(true);
  };

  /*card's header */
  const getHeader = () => {
    const filterData = (e) => {
      const lowerCase = e.target.value.toLowerCase().trim();
      const filteredUsers = users.filter((user) => {
        return Object.values(user).some((userField) =>
          userField.includes(lowerCase)
        );
      });
      setSearchedValue(e.target.value.toLowerCase().trim());
      setFiltered(filteredUsers);
    };

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
          padding: ".5rem",
        }}
      >
        <SearchBar
          placeholder={"placeholder"}
          handleChange={filterData}
          searchBarWidth="200px"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <CommonButton
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add user
          </CommonButton>
          <RefreshIcon sx={{ color: "rgba(0,0,0,.3)", fontSize: "2rem" }} />
        </Box>
      </Box>
    );
  };

  /* card's content */
  const getContent = () => {
    let content;
    let usersContent;

    usersContent = searchedValue.length !== 0 ? filtered : users;

    content =
      usersContent.length !== 0 ? (
        usersContent.map((user, index) => (
          <Box key={index} sx={{ mb: "2rem" }}>
            <Typography>User ID: {user.userId}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone: {user.phoneNumber}</Typography>
          </Box>
        ))
      ) : (
        <Typography
          align="center"
          sx={{
            margin: "40px 16px",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "1.3rem",
          }}
        >
          No users found
        </Typography>
      );

    return content;
  };

  /* default rendered content */
  let content = (
    <Grid>
      <BasicCard header={getHeader()} content={getContent()} />
      <NewUserModal
        open={open}
        onError={onError}
        onSuccess={onSuccess}
        setLoading={setLoading}
        onClose={() => {
          setOpen(false);
        }}
        addNewUser={addUser}
      />
      <BasicSnackBars
        open={openSuccess}
        onClose={handleSuccessClose}
        severity="success"
        message="New user added successfully."
      />
      <BasicSnackBars
        open={openError}
        onClose={handleErrorClose}
        severity="error"
        message="This error created on purpose to fake an error. Try again you have 50% chance to success.!"
      />
    </Grid>
  );

  /* rendered content when loading */
  if (loading) content = <LinearProgress color="secondary" />;

  return content;
};

export default Authentication;
