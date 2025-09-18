import { configureStore } from "@reduxjs/toolkit";
import projectDetails from "../features/dashboard/projectSlice";
import reviewDetails from "../features/dashboard/reviewSlice";
import contactDetails from "../features/dashboard/contactSlice";
import dsaDetails from "../features/dashboard/dsaSlice";
//create slice

const Store = configureStore({
  reducer: {
    projectDetails: projectDetails.reducer,
    reviewDetails: reviewDetails.reducer,
    contactDetails: contactDetails.reducer,
    dsaDetails: dsaDetails.reducer,
  },
});

export default Store;
