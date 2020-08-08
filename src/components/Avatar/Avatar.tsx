import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

interface AvatarImageProps {
  text?: string;
  /**The shape of the avatar. */
  variant?: "circle" | "rounded" | "square";
  /**	Override or extend the styles applied to the component */
  width?: string;
  heigth?: string;
  src?: string;
}

interface stylesProps {
  width?: string;
  heigth?: string;
}
const useStyles = makeStyles(() =>
  createStyles({
    large: {
      width: (props: stylesProps) => props.width,
      height: (props: stylesProps) => props.heigth,
    },
  })
);
const AvatarImage: React.FC<AvatarImageProps> = ({
  text,
  variant,
  width,
  heigth,
  src,
}) => {
  const classes = useStyles({ width, heigth });

  return (
    <Avatar alt="avatar" variant={variant} className={classes.large} src={src}>
      {text}
    </Avatar>
  );
};

AvatarImage.defaultProps = {
  variant: "circle",
  width: "100px",
  heigth: "100px",
};

export default AvatarImage;
