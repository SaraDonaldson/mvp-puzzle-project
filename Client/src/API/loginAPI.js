import Local from "./Local";

class userAPI {

  //register
  static async registerUser(username, email, password) {
    let body = { username, password, email };
    return await this._doFetch("/register", "POST", body);
  }

  //Update User (more details)
  static async updateUser(body, userId) {
    return await this._doFetch(`/users/user/${userId}`, "PUT", body);
  }

  //login
  static async loginUser(username, password) {
    let body = { username, password };
    return await this._doFetch("/login", "POST", body);
  }


  static async _doFetch(url, method = "GET", body = null) {
    let options = {
      method,
      headers: {},
    };

    let token = Local.getToken();
    if (token) {
      options.headers["Authorization"] = "Bearer " + token;
    }

    if (body) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

    let uresponse = { ok: false, data: null, status: 0, error: "" };

    try {
      let response = await fetch("/" + url, options);
      if (response.ok) {
        uresponse.ok = true;
        uresponse.data = await response.json();
        uresponse.status = response.status;
      } else {
        uresponse.status = response.status;
        uresponse.error = response.statusText;
       
      }
    } catch (err) {
      uresponse.error = err.message;
    }

    return uresponse;
  }
}

export default userAPI;
