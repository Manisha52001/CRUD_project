// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './Layout'
// import Home from './Home'
// import ViewAll from './ViewAll'
// import SingleStudent from './SingleStudent'
// import Update from './Update'
// import ErrorPage from './ErrorPage'


// const App = () => {
//   return (
//     <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Layout/>}>
//                 <Route index element={<Home/>}/>
//                 <Route path='/viewall' element={<ViewAll/>}/>
//                 <Route path='/singlestu/:id' element={<SingleStudent/>}/>
//                 <Route path='/edit/:id' element={<Update/>}/>
//                 <Route path='*' element={<ErrorPage/>}/>
//             </Route>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// !v6-->object way
import React from 'react'
import Layout from './Layout'
import Home from './Home'
import ViewAll from './ViewAll'
import SingleStudent from './SingleStudent'
import Update from './Update'
import ErrorPage from './ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

let r=createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/viewall",
        element: <ViewAll/>,
      },
      {
        path: "/singlestu/:id",
        element: <SingleStudent/>,
      },
      {
        path: "/edit/:id",
        element: <Update/>,
      },
      {
        path: "*",
        element: <ErrorPage/>
      }
    ],
  },
]);


const App = () => {
  return (
    <>
      <div>
          <Toaster/>
      </div>
      <RouterProvider router={r}></RouterProvider>
    </>
  )
}

export default App