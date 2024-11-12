import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store' // Assuming the RootState is defined in the store file
import { ProjectState } from '../types/projectTypes'

export interface Font {
  id: number
  name: string
  url: string
  createdAt: string
  updatedAt: string
}

export interface UserState {
  error: boolean
  loading: boolean
  id: string
  username: string
  email: string
  name: string
  avatarUrl: string
  videos: never[]
  projects: never[]
  plan: string
  jwt?: string
  fonts: Font[]
}

const initialState: UserState = {
  error: false,
  loading: true,
  id: '',
  username: '',
  email: '',
  name: '',
  avatarUrl: '',
  videos: [],
  projects: [],
  plan: 'free',
  fonts: [],
  jwt:
    process.env.NODE_ENV !== 'production'
      ? process.env.LOCAL_DEV === 'arthur'
        ? ''
        : ''
      : '',
}

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInitialUserState: (state) => {
      return initialState
    },
    setUser: (state, action: PayloadAction<Partial<UserState>>) => ({
      ...state,
      ...action.payload,
    }),
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        if (key in state || key === 'plan') {
          state[key as keyof UserState] = value as never
        }
      })
    },
    logout: () => initialState,
  },
})

export const { logout, setUser, updateUser, setInitialUserState } = slice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state: RootState) => state.user
export const selectJwt = (state: RootState) => state.user.jwt

export const User = {
  actions: slice.actions,
  selectors: { selectUser, selectJwt },
}

export default slice.reducer
