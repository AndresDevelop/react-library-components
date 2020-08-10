import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import WithLoading from "../WithloadingHOC/withLoading";
interface SimpleListProps {
  data: Array<{
    primaryLabel: string;
    id: string;
    primaryOptional?: Array<{ label: string }>;
  }>;
  className?: string;
  isPrimaryOptional?: boolean;
  SecondaryComponent?: "anchor" | React.ReactNode;
  AnchorText?: string;
}

const useStyles = makeStyles({
  optional: {
    paddingRight: "20px",
  },
});

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const SimpleList: React.FC<SimpleListProps> = ({
  data,
  className,
  isPrimaryOptional,
  SecondaryComponent,
  AnchorText,
}) => {
  const classes = useStyles();
  return (
    <List className={className}>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem>
            <ListItemText>
              {isPrimaryOptional && (
                <div>
                  {item.primaryOptional?.map((opt, index) => {
                    return (
                      <span className={classes.optional} key={index}>
                        {opt.label}
                      </span>
                    );
                  })}
                </div>
              )}
              <span>{item.primaryLabel}</span>
            </ListItemText>
            <ListItemSecondaryAction>
              {SecondaryComponent === "anchor" ? (
                <ListItemLink href={`/${item.id}`}>{AnchorText}</ListItemLink>
              ) : (
                SecondaryComponent
              )}
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default WithLoading(SimpleList);
