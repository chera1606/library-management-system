import { User, user } from "./User.js";

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  getRole() {
    return "Admin";
  }
}
