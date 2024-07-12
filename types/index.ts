export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type NavConfig = {
  mainNav: NavItem[];
};

export type MenuConfig ={
    [category: string]: string[];
}
  
export type NewInfoItem ={
    date: string;
    type: string;
    content: string;
  }