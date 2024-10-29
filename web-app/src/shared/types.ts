export enum SelectedPage {
  Home = "home",
  Services = "services",
  About = "about",
  Contact = "contact",
  Privacy = "privacy",
}

export interface ServiceType {
  title: string;
  description: string;
  img: string;
  route: string;
}

export interface ProjectType {
  title: string;
  description: string;
  img: string;
  route: string;
}


export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
