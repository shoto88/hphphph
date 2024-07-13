import { servicesConfig } from './services';

export const menuConfig = servicesConfig.map(category => ({
  name: category.name,
  slug: category.slug,
  services: category.services.map(service => ({
    name: service.name,
    slug: service.slug,
    description: service.description
  }))
}));