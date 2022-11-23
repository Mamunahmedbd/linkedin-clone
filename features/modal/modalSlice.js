import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  modalType: "dropIn",
  handlePost: false,
  postValue: {},
  ssrPostState: false,
};

export const modalSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setHandlePost: (state, action) => {
      state.handlePost = action.payload;
    },
    setPostValue: (state, action) => {
      state.postValue = action.payload;
    },
    setSSRPostState: (state, action) => {
      state.ssrPostState = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setModalOpen,
  setModalType,
  setHandlePost,
  setPostValue,
  setSSRPostState,
} = modalSlice.actions;

export default modalSlice.reducer;
