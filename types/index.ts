export interface MenuItem {
  label: string;
  href: string;
}


export interface NavConfig {
  mainNav: MenuItem[];
}

export interface ServiceItem {
  name: string;
  slug: string;
  description?: string;
  content?: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  services: ServiceItem[];
}

export interface NewInfoItem {
  date: string;
  type: string;
  content: string;
}