import "./App.css";
import { Welcome } from "./Welcome";
import Button from "@mui/material/Button";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState } from "react";
//import SearchIcon from "@mui/icons-material/Search";
//import { styled, alpha } from "@mui/material/styles";
//import InputBase from "@mui/material/InputBase";
import { FproductList } from "./FproductList";
import { AproductList } from "./AproductList";
import { SproductList } from "./SproductList";


/*const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));*/

function App() {
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
 


  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>

              <Button color="inherit" onClick={() => history.push("/flipkart")}>
                Flipkart 
              </Button>
              <Button color="inherit" onClick={() => history.push("/amazon")}>
                Amazon
              </Button>
              <Button color="inherit" onClick={() => history.push("/snapdeal")}>
                Snapdeal
              </Button>
              

             {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
             </Search>*/}

             

              <Button
                color="inherit"
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>
          <div className="route-container">
            <Switch>
              
              <Route path="/flipkart">
               <FproductList/>
              </Route>

              <Route path="/amazon">
               <AproductList/>
               </Route>
               <Route path="/snapdeal">
               <SproductList/>
               </Route>
               <Route path="/">
                <Welcome />
              </Route>
             
            </Switch>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
