export interface ITeaTypes {
  name: string;
  slug: string;
  description: string;
  country: string;
  city: string;
  harvestDate: string;
  price: number;
  image: {
    url: string;
  };
  typeOfTea: {
    name: string;
  };
}

export type TeasProps = {
  teas: ITeaTypes[];
};
