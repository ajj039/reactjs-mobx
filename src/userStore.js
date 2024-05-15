import { makeAutoObservable } from "mobx";
import axios from "axios";
import { url } from "./constants";

class UserStore {
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers(name) {
    try {
      const res = await axios.get(`${url}/users`);
      console.log("inside axios", res.data);
      if (name) {
        this.users = res.data.filter((user) =>
          user.name.toLowerCase().includes(name.toLowerCase())
        );
        console.log("res data", res.data);
      } else {
        this.users = res.data;
      }
    } catch (error) {}
  }

  async AddUsers(data) {
    const newdata = await axios.post(`${url}/users`, data);
    this.users.push(newdata.data);
  }
  async DeleteUser(id) {
    // console.log("deleting user....", id);
    const { data } = await axios.delete(`${url}/users/${id}`);
    console.log("deleting dat....", data);
    this.users = this.users.filter((item) => item.id !== data.id);
  }

  async SortUsers(sortType) {
    const { data } = await axios.get(
      `${url}/users?_sort=${sortType === "asc" ? "name" : "-name"}`
    );
    console.log("sorting data----->", data);
    this.users = data;
  }
}

const userStore = new UserStore();
export default userStore;
