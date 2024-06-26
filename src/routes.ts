import { AddressController } from "./controller/AddressController";
import { CityController } from "./controller/CityController";
import { CountryController } from "./controller/CountryController";
import { DistrictController } from "./controller/DistrictController";
import { FileController } from "./controller/FileController";
import { SearchController } from "./controller/SearchController";
import { TownController } from "./controller/TownController";
import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get", //! /:id url ile çakışma olmaması için önce /search yazıldı.
    route: "/users/search",
    controller: UserController,
    action: "search",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users/add",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/delete/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "put",
    route: "/users/update/:id",
    controller: UserController,
    action: "update",
  },

  //!address
  {
    method: "get",
    controller: AddressController,
    route: "/address/all", //! /:id urlsi ile çakışma olmaması için önce /all yazıldı. daima böyle yazılır
    action: "all",
  },
  {
    method: "get",
    controller: AddressController,
    route: "/address/:id",
    action: "one",
  },
  {
    method: "get",
    controller: AddressController,
    route: "/address/user/:userId",
    action: "userOne",
  },
  {
    method: "post",
    route: "/address/add",
    controller: AddressController,
    action: "save",
  },
  {
    method: "put",
    route: "/address/:id",
    controller: AddressController,
    action: "update",
  },
  //!country
  {
    method: "get",
    route: "/country/all",
    controller: CountryController,
    action: "all",
  },
  {
    method: "get",
    route: "/country/:countryId",
    controller: CountryController,
    action: "countryUsers",
  },
  {
    method: "post",
    route: "/country/add",
    controller: CountryController,
    action: "save",
  },
  {
    method: "put",
    route: "/country/:id",
    controller: CountryController,
    action: "update",
  },

  //! city
  {
    method: "get",
    route: "/city/all",
    controller: CityController,
    action: "all",
  },
  {
    method: "get",
    route: "/city/:cityId",
    controller: CityController,
    action: "cityUsers",
  },
  {
    method: "post",
    route: "/city/add",
    controller: CityController,
    action: "save",
  },
  {
    method: "put",
    route: "/city/:id",
    controller: CityController,
    action: "update",
  },
  //! district
  {
    method: "get",
    route: "/district/all",
    controller: DistrictController,
    action: "all",
  },
  {
    method: "post",
    route: "/district/add",
    controller: DistrictController,
    action: "save",
  },
  {
    method: "put",
    route: "/district/:id",
    controller: DistrictController,
    action: "update",
  },

  //! town 
  {
    method: "get",
    route: "/town/all",
    controller: TownController,
    action: "all",
  },
  {
    method: "post",
    route: "/town/add",
    controller: TownController,
    action: "save",
  },
  {
    method: "put",
    route: "/town/:id",
    controller: TownController,
    action: "update",
  }, {
    method: "get",
    route: "/file-read",
    controller: FileController,
    action: "all"
}, {
  method: "get",
  route: "/search",
  controller: SearchController,
  action: "search"
} 
  

  //   , {
  //     method: "get",
  //     route: "/search",
  //     controller: SearchController,
  //     action: "all"
  // }
];
