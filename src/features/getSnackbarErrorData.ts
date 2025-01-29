import { SnackbarError } from "../errors/SnackbarError";

export const getSnackbarErrorData = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ error: "Fake error data" });
    }, 1000);
  });

  try {
    // fetch("invalid");
    throw new Error("Fetch error");
  } catch (err) {
    console.error(err);
    throw new SnackbarError("Custom snackbar error message");
  }
};
