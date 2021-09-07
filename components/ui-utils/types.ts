export interface RowI {
  justify?:
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center"
    | "flex-start"
    | " flex-end";
  align?: "center" | "flex-end" | "flex-start";
  className?: string;
  id?: string;
  style?: object;
  children?: any;
  props?: object;
}

export interface ColI {
  justify?:
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center"
    | "flex-start"
    | " flex-end";
  align?: "center" | "flex-end" | "flex-end";
  className?: string;
  id?: string;
  style?: object;
  span?: string;
  children?: any;
  props?: object;
}

export interface GridI {
  column?: number | string;
  row?: number | string;
  placeContent?: string;
  className?: string;
  id?: string;
  style?: object;
  span?: string;
  children?: any;
  props?: object;
}
