export interface IMenuItem {
  text: string;
  icon?: React.ReactNode;
  description?: string;
  href?: string;
}

export interface ISettingsItem<T> extends IMenuItem {
  selector: T;
  setting: T;
}

export interface IAnswerItem extends IMenuItem {
  
}
