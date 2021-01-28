import { TUser } from "../../contexts/user/user.type";

export const testUser: TUser = {
  isAuthenticated: true,
  profile: {
    name: "飯山秀太",
    email: "shuta.iiyama@star.rcast.u-tokyo.ac.jp",
  },
  address: {
    postalCode: "111-1111",
    prefecture: "埼玉県",
    city: "さいたま市",
    addressLine: "さいたま区1-11-11",
    tel: "11111111111",
    building: "",
  },
  card: {
    brand: "visa",
    last4: "1111",
    expYear: "2020",
    expMonth: "11",
  },
};
