export enum SelectedPage {
  Home = "home",
  Services = "services",
  About = "about",
  Contact = "contact",
}

export interface ServiceType {
  title: string;
  description: string;
  img: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
