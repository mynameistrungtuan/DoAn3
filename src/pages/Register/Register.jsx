import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.scss";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    setTimeout(() => {
      let url = window.location.origin;
      window.location.href = `${url}/`;
      history.push("/");
    }, 2000);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <div className="container_register">
        <div className="container_register_form">
          <div class="container_register_form_1">
            <div class="container_register_form_2">
              <div class="welcome">Hello There!</div>
              <div class="subtitle">
                We're almost done. Before using our services you need to create
                an account.
              </div>
              <div class="input-fields">
                <input
                  type="text"
                  placeholder="Username"
                  class="input-line full-width"
                  required
                ></input>
                <input
                  type="date"
                  placeholder="Birth day"
                  class="input-line full-width"
                  required
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  class="input-line full-width"
                  required
                ></input>
                <input
                  type="text"
                  placeholder="Number phone"
                  class="input-line full-width"
                  required
                ></input>
                <input
                  type="text"
                  placeholder="Address"
                  class="input-line full-width"
                  required
                ></input>
                <input
                  type="number"
                  placeholder="Citizen identification"
                  class="input-line full-width"
                  required
                ></input>
              </div>

              <div>
                <button class="ghost-round full-width" onClick={handleClick}>
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Đăng Kí thành công !
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default Register;
