
import './App.css';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './Components/Topics/Topics';
import Statics from './Components/Statics/Statics';
import Blog from './Components/Blog/Blog';
import Quizs from './Components/Quizs/Quizs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Topics></Topics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },

        {

          path: '/topics',
          element: <Topics></Topics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')

        },
        {
          path: '/statics',
          element: <Statics></Statics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: `quiz/:quizId`,
          element: <Quizs></Quizs>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        }
      ]
    },

    {
      path: '*', element: <div className='text-center mt-5'>
        <h1 className='display-1 fw-bold'>404</h1>
        <p className='display-4'>Page not Found</p>
      </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
