import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import { getSnackbarErrorData } from "../features/getSnackbarErrorData";

const SnackbarErrorComponent = () => {
  const { isLoading, isError } = useQuery({
    queryKey: ["snackbarErrorData"],
    queryFn: getSnackbarErrorData,
  });

  if (isError) {
    return <div>Snackbar Error</div>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return <div>Snackbar Error Component</div>;
};

export default SnackbarErrorComponent;
