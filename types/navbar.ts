export type ChildItem = {
  label: string;
  path: string;
};

export type MenuItem = {
  label: string;
  path?: string;
  children?: ChildItem[];
  isActive?: (pathname: string) => boolean;
};
