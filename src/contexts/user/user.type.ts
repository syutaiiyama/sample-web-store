export type TUser = {
  isAuthenticated: boolean;
  profile: TProfile;
  address: TAddress;
  card: TCreditCard;
};

export type TProfile = {
  name: string;
  email: string;
};

export type TAddress = {
  postalCode: string;
  prefecture: string;
  city: string;
  addressLine: string;
  building: string;
  tel: string;
};

export type TCreditCard = {
  brand: string;
  last4: string;
  expYear: string;
  expMonth: string;
};
