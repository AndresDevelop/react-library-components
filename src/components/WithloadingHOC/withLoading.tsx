import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles({
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "150px",
  },
  text: {
    marginLeft: "50px",
  },
});
export interface WrappedComponentWithLoadingProprs {
  isLoading: boolean;
  isError: boolean;
}

const withLoadingText = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WrappedComponentWithLoadingProprs> => ({
  isLoading,
  isError,
  ...args
}: WrappedComponentWithLoadingProprs) => {
  const classes = useStyles();
  return isLoading ? (
    <div className={classes.loading}>
      <CircularProgress />
      <Typography variant="subtitle2" className={classes.text}>
        LOADING DATA
      </Typography>
    </div>
  ) : isError ? (
    <div className={classes.loading}>
      <Typography variant="subtitle2" color="error">
        Something went wrong!
      </Typography>
    </div>
  ) : (
    <WrappedComponent {...(args as P)} />
  );
};

export default withLoadingText;
