import { useQuery } from "react-query";
import { getErrorData } from "../features/getErrorData";
import { CircularProgress } from "@mui/material";

const ErrorComponent = () => {
  const { isLoading, isError } = useQuery({
    queryKey: ["errorData"],
    queryFn: getErrorData,
  });

  if (isError) {
    return <div>Basic Error</div>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return <div>ErrorComponent</div>;
};

export default ErrorComponent;
