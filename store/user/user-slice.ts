import { createSlice } from '@reduxjs/toolkit'
import {User} from '../../type/user'
import type { PayloadAction } from '@reduxjs/toolkit'
import { setCookie } from '@/utils/cookie'


type AuthState = {
  user: User | null
  token: string | null
}

const slice = createSlice({
  name: 'user',
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user
      state.token = token
      console.log("shhh")
      setCookie("token", token);
      console.log("cookie set")
    },
  },
})

export const { setCredentials } = slice.actions

export default slice.reducer

