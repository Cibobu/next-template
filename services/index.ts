import { AxiosResponse } from "axios"
import { setToLocalStorage } from "../store/local_storage"
import useGuardInstance, { instance as nonGuardInstance } from "./instance"
import { IPost, LoginExampleRequest } from "./types"

export const useExampleAuthServices = () => {
  return {
    login: (payload: LoginExampleRequest) => new Promise<AxiosResponse>((resolve, reject) => {
      nonGuardInstance.post("/login", payload)
        .then((res) => {
          setToLocalStorage({
            // bisa store apapun kedalam localstorage, check: /store/local_storage.ts
            accessToken: res.data.token
          })
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export const useTodoServices = () => {
  const instance = useGuardInstance()
  return {
    getTodos: () => instance().get("/todos"),
    getTodoById: (id: string) => instance().get(`/todo/${id}`)
  }
}

export const usePostServices = () => {
  const instance = useGuardInstance()
  return {
    getPosts: () => instance().get("/posts"),
    getPostById: (id: string) => instance().get(`/posts/${id}`),
    createPost: (payload: Pick<IPost, "id">) => instance().post(`/posts/`, payload),
    updatePostByIdL: (payload: IPost, id: string) => instance().put(`/post/${id}`, payload)
  }


}