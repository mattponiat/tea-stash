export interface ITeaTypes {
  name: string;
  slug: string;
  description: string;
  country: string;
  city: string;
  harvestDate?: string;
  price: number;
  coverImage: string;
  typeOfTea: {
    name: string;
  };
}
