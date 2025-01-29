import { CssBaseline, Stack } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarError } from "./errors/SnackbarError";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SnackbarErrorPage from "./pages/SnackbarErrorPage";

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const queryClient = React.useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          onError: (error) => {
            if (error instanceof SnackbarError) {
              enqueueSnackbar(error.message);
            }
          },
        },
      },
    });
  }, [enqueueSnackbar]);

  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <header>
            <Stack direction="row" spacing={8}>
              <Link to="/">Home</Link>
              <Link to="/basic-error">Basic error</Link>
              <Link to="/snackbar-error">Snackbar Error</Link>
            </Stack>
          </header>
          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="basic-error" element={<ErrorPage />} />
            <Route path="snackbar-error" element={<SnackbarErrorPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
