import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { auth } from "../../config/firebase-config";
import { IconBrandGoogle, IconBrandFacebook } from "@tabler/icons";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { Fragment, useState } from "react";

import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Center,
} from "@mantine/core";
import { useStyles } from "./styles";
import { FirebaseError } from "firebase/app";
import { formatWithOptions } from "util";
import { appendFile } from "fs";
import axios from "axios";

export function AuthPage(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const { classes } = useStyles();
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  // const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      photoURL: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        form.values.email,
        form.values.password
      );

      const newUser = {
        displayName: form.values.name,
        photoURL: form.values.photoURL,
        firebaseId: user.user.uid,
      };
      console.log(newUser);
      const createNewUser = async () => {
        const res = await axios.post(
          `https://hateelao-api.up.railway.app/users`,
          newUser
        );
      };

      createNewUser();
      alert("Register Success");
      toggle();
      setTimeout((location.href = "/"), 500);
      // location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        form.values.email,
        form.values.password
      );

      // console.log("Login");
      // console.log(user);
      location.href = "/";
      // navigate("/home");
    } catch (err) {
      alert("Wrong username or password");
      // console.log(err);
    }
  };

  const loginOrRegister = () => {
    if (type == "login") {
      return login();
    } else return register();
  };

  const logout = async () => {
    await signOut(auth);
  };

  const facebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        location.href = "/";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;

        // ...
      });
  };

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const credential = GoogleAuthProvider.credentialFromResult(result);
        location.href = "/";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;

        // ...
      });
  };
  return (
    <div className={classes.mainDiv}>
      <Text
        size="lg"
        weight={700}
        align="center"
        className={classes.loginText}
        style={{
          marginTop: type == "login" ? "-100px" : "0px",
        }}
      >
        {type == "login" ? "Login" : "Register"}
      </Text>
      <Paper
        radius="md"
        p="lg"
        withBorder
        {...props}
        style={{
          marginTop: "20px",
        }}
      >
        <form onSubmit={form.onSubmit(loginOrRegister)}>
          <Stack>
            {type === "register" && (
              <TextInput
                required
                label="Display Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="example@gmail.com"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 7 characters"
              }
            />
            {type === "register" && (
              <TextInput
                required
                label="PhotoURL"
                placeholder="Your photoURL"
                value={form.values.photoURL}
                onChange={(event) =>
                  form.setFieldValue("photoURL", event.currentTarget.value)
                }
              />
            )}

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button
              type="submit"
              style={{
                backgroundColor: "white",
                borderColor: "#1A1B1E",
                color: "#1A1B1E",
              }}
            >
              {upperFirst(type)}
            </Button>
          </Group>
          <Text
            align="center"
            style={{
              marginTop: "20px",
              marginBottom: "-10px",
            }}
          >
            OR
          </Text>
          <Group grow mb="md" mt="md">
            <IconBrandGoogle
              className={classes.brandButton}
              onClick={googleLogin}
            />
            <IconBrandFacebook
              className={classes.brandButton}
              onClick={facebookLogin}
            />
          </Group>
        </form>
      </Paper>
    </div>
  );
}
