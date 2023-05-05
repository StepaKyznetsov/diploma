type TMenuItem = "navigation" | "answer";

export interface IMenuItem {
  text: string;
  onClickHandler?(): void;
  icon?: React.ReactNode;
  description?: string;
  type?: TMenuItem;
  href?: string;
}
