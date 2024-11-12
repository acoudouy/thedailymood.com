import { createAxios } from '../../components/utils'
import { RootState } from '../store'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { URLBACK } from '../../env'

export const asyncUpdateClip = createAsyncThunk(
  'clips/updateClip',
  async (
    {
      data,
    }: {
      data: any
    },
    { getState },
  ) => {
    const state = getState() as RootState
    const { activeClipIndex } = state.clips
    const activeClip = state.clips.value[activeClipIndex]

    const axios = createAxios(state.user.jwt)
    const url = `${URLBACK}api/clips/${activeClip.id}`
    try {
      const result = await axios.put(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      })
      return { data: result.data }
    } catch (e: any) {
      console.error(e)
      throw new Error(`Error updating clip: ${e.response.data.error.message}`)
    }
  },
)
