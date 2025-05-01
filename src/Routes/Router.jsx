import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AddNote from "../Components/HomeComponents/AddNote";

import Home from "../Pages/Home";
import NoteDetails from "../Pages/NoteDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        { index:true, element:<Home></Home>},
        {path:'/addnote', element:<AddNote></AddNote>},
        { path:'/notedetails/:id' , element: <NoteDetails></NoteDetails>}
      ]
    },
  ]);