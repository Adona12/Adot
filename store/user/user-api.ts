import { User, UserProfile } from "@/type/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const BASE_URL = "https://adot-backend.vercel.app/api/";
// Define a service using API routes

interface UserBody {
  phone: string;
  password: string;
}
export const userApi = createApi({
  reducerPath: "user/api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    mode: "cors",
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserByToken: builder.query({
      query: () => "/login/basic",
    }),
    getUserProfile: builder.query<UserProfile,void>({
      query: () => ({
        url: "/profile/my",
        method: "GET",
      }),
    }),
    loginUser: builder.mutation({
      query: (body: UserBody) => {
        return { url: "/login/basic", method: "POST", body };
      },
    }),
    deleteUser: builder.mutation({
      query: () => {
        return { url: "/logout", method: "POST" };
      },
    }),

  }),
});
// Export hooks for usage
export const { useGetUserByTokenQuery, useLoginUserMutation,useGetUserProfileQuery,useDeleteUserMutation} = userApi;
