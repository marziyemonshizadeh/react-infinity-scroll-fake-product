import { faker } from "@faker-js/faker";

export function createRandomProduct() {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.lorem.lines({ min: 8, max: 10 }),
    price: faker.commerce.price(),
    image: faker.image.url(),
  };
}

export const Products = faker.helpers.multiple(createRandomProduct, {
  count: 200,
});
