export interface ITeaTypes {
  name: string;
  slug: string;
  description: string;
  country: {
    name: string;
  };
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

export type Teas = ITeaTypes[];
