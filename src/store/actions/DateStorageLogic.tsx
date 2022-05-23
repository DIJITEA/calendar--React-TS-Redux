import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface YearState {
  value: string,
  targetMonth: string,
  daysObj: object
}

const initialState: YearState = {
  value: '',
  targetMonth: '',
  daysObj: []
}

export const DateSliceLogic = createSlice({
  name: 'DateLogic',
  initialState,
  reducers: {
    YearUpdate: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    monthTargetUpdate: (state, action: PayloadAction<string>) => {
      state.targetMonth = action.payload
    },
    daysInfoUpdate: (state, action: PayloadAction<object>) => {
      state.daysObj = action.payload
    }
  }
})

export const { YearUpdate, monthTargetUpdate, daysInfoUpdate } = DateSliceLogic.actions

export default DateSliceLogic.reducer