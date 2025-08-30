// import React from 'react';
// import { createBrowserRouter, Navigate } from 'react-router-dom';
// import Main from '../pages/main';
// import Home from '../pages/home/home';
// import Login from '../pages/login';
// import MyText1 from '../pages/texts/text1';
// import MyText2 from '../pages/texts/text2';
// import MyPhoto from '../pages/photo/photo';
// const routes = [
//   {
//     path: '/',
//     Component: Main,
//     children: [
//       {
//         path: '/',
//         element: <Navigate to="home" replace />,
//       },
//       {
//         path: 'home',
//         Component: Home,
//       },
//       {
//         path: 'texts',
//         children: [
//           {
//             path: 'text1',
//             Component: MyText1,
//           },
//           {
//             path: 'text2',
//             Component: MyText2,
//           },
//         ],
//       },
//       {
//         path: 'photo',
//         Component: MyPhoto,
//       },
//     ],
//   },
// ];
// export default createBrowserRouter(routes)

import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from '../pages/main';
import Home from '../pages/home/home';
import Login from '../pages/login';
import MyText1 from '../pages/texts/text1';
import MyText2 from '../pages/texts/text2';
import MyPhoto from '../pages/photo/photo';

// const AuthContext = createContext<{ isLoggedIn: boolean; setIsLoggedIn: (value: boolean) => void }>(
//   {
//     isLoggedIn: false,
//     setIsLoggedIn: () => {},
//   },
// );

// const RequireAuth = ({ children }: { children: React.ReactNode }) => {
//   const { isLoggedIn } = useContext(AuthContext);
//   return isLoggedIn ? children : <Navigate to="/login" replace />;
// };

const routes = [
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/',
    element: (
      // <RequireAuth>
      <Main />
      // </RequireAuth>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="home" replace />,
      },
      {
        path: 'home',
        Component: Home,
      },
      {
        path: 'texts',
        children: [
          {
            path: 'text1',
            Component: MyText1,
          },
          {
            path: 'text2',
            Component: MyText2,
          },
        ],
      },
      {
        path: 'photo',
        Component: MyPhoto,
      },
    ],
  },
];

// 创建一个自定义的 Router 组件，用于提供登录状态上下文
// const AppRouter = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       <RouterProvider router={router} />
//     </AuthContext.Provider>
//   );
// };

export default createBrowserRouter(routes);

// 注意：在生产环境中，请确保设置REACT_APP_API_URL环境变量指向您的后端API地址
