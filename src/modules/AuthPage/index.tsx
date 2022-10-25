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
} from "firebase/auth";
import { useState } from "react";

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
} from "@mantine/core";
import { useStyles } from "./styles";
import { FirebaseError } from "firebase/app";

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
      console.log("Create New User");
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

      console.log("Login");
      console.log(user);
      // navigate("/home");
    } catch (err) {
      console.log(err);
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
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        {type == "login" ? "Login" : "Register"}
      </Text>

      <Group grow mb="md" mt="md"></Group>

      {/* <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

      <form onSubmit={form.onSubmit(loginOrRegister)}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
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
            placeholder="hello@mantine.dev"
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
              "Password should include at least 6 characters"
            }
          />

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
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>

        <Group grow mb="md" mt="md">
          {/* <IconBrandGoogle
            className={classes.brandButton}
            onClick={facebookLogin}
          /> */}
          <IconBrandFacebook
            className={classes.brandButton}
            onClick={facebookLogin}
          />
        </Group>
      </form>
    </Paper>
  );
}
