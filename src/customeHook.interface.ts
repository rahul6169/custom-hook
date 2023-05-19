interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface UserCustomHook {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  company: Company;
}

export interface PostCustomHook {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface CommentCustomHook {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
