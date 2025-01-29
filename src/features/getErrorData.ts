export const getErrorData = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ error: "Fake error data" });
    }, 1000);
  });

  // fetch("invalid");
  throw new Error("Fetch error");
};
