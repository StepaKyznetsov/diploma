export interface IMenuItem {
  text: string;
  onClickHandler?(): void;
  icon?: React.ReactNode;
  description?: string;
  isChoosen?: boolean;
};
