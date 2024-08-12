type BodyType = Record<string, number | boolean | string | null>;

export interface ApiType {
  method: string;
  body?: BodyType;
  path?: string;
}
class Api {
  private CallApi = async ({ method, body, path }: ApiType) => {
    const requestHeader = new Headers();
    requestHeader.append("Content-Type", "application/json");

    const token = localStorage.getItem("auth");
    if (token) {
      requestHeader.append("Authorization", `Bearer ${token}`);
      
    }

    const response = await fetch(`http://localhost:3000/${path}`, {
      method,
      headers: requestHeader,
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
  }

  public Get = async (path?: string) => {
    return await this.CallApi({ method: "GET", path });
  }

  public Post = async (path?: string, body?: BodyType) => {
    return await this.CallApi({ method: "POST", body, path });
  }
  public Put = async (path?: string, body?: BodyType) => {
    return await this.CallApi({ method: "PUT", body, path });
  }

  public Patch = async (path?: string, body?: BodyType) => {
    return await this.CallApi({ method: "PATCH", body, path })
  }

  public Delete = async (path?: string) => {
    return await this.CallApi({ method: "DELETE", path });
  }
}

export default new Api;


