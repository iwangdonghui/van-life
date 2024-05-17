import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, {loader as vansloader} from './pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader} from './pages/Vans/VanDetail';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Login, {loader as loginLoader, action as loginAction} from './pages/Login';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Error from './components/Error';

import "./server"
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans';
import HostVanDetail, {loader as hostVanDetailLoader }from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import NotFound from './pages/NotFound';
import { requireAuth } from './utility';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route 
          path='login' 
          element={<Login />}
          loader={loginLoader} 
          action={loginAction}
        />
        <Route 
          path="/vans" 
          element={<Vans />} 
          loader={vansloader} 
          errorElement={<Error />}
        />
        <Route 
          path='/vans/:id' 
          element={<VanDetail />}
          loader={vanDetailLoader}
           />
        <Route path='host' element={<HostLayout /> }>
          <Route index element={<Dashboard />} loader={async ({ request }) => await requireAuth(request)} />
          <Route path='income' element={<Income />} loader={async ({ request }) => await requireAuth(request)} />
          <Route path='reviews' element={<Reviews />} loader={async ({ request }) => await requireAuth(request)} />
          <Route path='vans' element={<HostVans />} loader={hostVansLoader} />
          <Route path='vans/:id' element={<HostVanDetail />} loader={hostVanDetailLoader} >
            <Route index element={<HostVanInfo />} loader={async ({ request }) => await requireAuth(request)} />
            <Route path="photos" element={<HostVanPhotos />} loader={async ({ request }) => await requireAuth(request)} />
            <Route path="pricing" element={<HostVanPricing />} loader={async ({ request }) => await requireAuth(request)} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);