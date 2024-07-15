export type MenuItem = {
  label: string;
  href: string;
  children?: MenuItem[];
}


export type NavConfig ={
  mainNav: MenuItem[];
}

export type ServiceItem ={
  name: string;
  slug: string;
  description?: string;
  content?: string;
}

export type ServiceCategory ={
  name: string;
  slug: string;
  services: ServiceItem[];
}

export type NewInfoItem ={
  date: string;
  type: string;
  content: string;
  imagePath:string;
}

export type NewInfoConfig = {
  infoItem: NewInfoItem[];
}

export type ServiceConfig = {
  serviceCategory: ServiceCategory[];
}

