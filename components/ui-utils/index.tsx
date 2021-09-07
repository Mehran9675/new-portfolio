import styles from "./styles.module.scss";
import { RowI, ColI, GridI } from "./types";
export const Row = (props: RowI) => {
  const style = { justifyContent: props.justify, alignItems: props.align };
  return (
    <div
      style={style}
      className={`${styles["ui-row"]} ${props.className}`}
      {...props.props}
    >
      {props.children}
    </div>
  );
};

export const Col = (props: ColI) => {
  const style = {
    justifyContent: props.justify,
    alignItems: props.align,
    minWidth: props.span,
  };
  return (
    <div
      style={style}
      className={`${styles["ui-col"]} ${props.className}`}
      {...props.props}
    >
      {props.children}
    </div>
  );
};

export const Grid = (props: GridI) => {
  const style = {
    gridTemplateColumns:
      typeof props.column === "number"
        ? genStyle(props.column) || ""
        : props.column,
    gridTemplateRows:
      typeof props.row === "number" ? genStyle(props.row) || "" : props.row,
    placeContent: props.placeContent,
  };

  function genStyle(times: number | string): string | void {
    if (times && typeof times === "number") {
      let result = [];
      for (let i = 0; i < times; i++) {
        result.push("auto");
      }
      return result.join(" ");
    } else return;
  }

  return (
    <div
      style={style}
      className={`${styles["ui-grid"]} ${props.className}`}
      {...props.props}
    >
      {props.children}
    </div>
  );
};

// export const GridItem = (props)=>{
//   return (
//     <div
//       style={style}
//       className={`${styles["ui-grid"]} ${props.className}`}
//       {...props.props}
//     >
//       {props.children}
//     </div>
//   );
// }
