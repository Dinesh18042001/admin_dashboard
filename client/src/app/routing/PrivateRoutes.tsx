import React, { FC, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MasterLayout } from '../../_metronic/layout/MasterLayout';
import TopBarProgress from 'react-topbar-progress-indicator';
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper';
import { MenuTestPage } from '../pages/MenuTestPage';
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils';
import { WithChildren } from '../../_metronic/helpers';
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper';
 // Import Page component

import Products from '../pages/dashboard/Product/Products';

import ProductDetails from '../pages/dashboard/Product/ProductDetails';
import OrderDetails from '../pages/dashboard/Orders/OrderDetails';
import Customers from '../pages/dashboard/Customers/Customers';


import AddProject from '../pages/dashboard/Product/AddProducts';
import DeliveredOrders from '../pages/dashboard/Orders/DeliveredOrders';
import PendingOrders from '../pages/dashboard/Orders/PendingOrders';
import ProductCancelled from '../pages/dashboard/Orders/ProductCancelled';
import ProductReturn from '../pages/dashboard/Orders/ProductReturn';
import TodayOrders from '../pages/dashboard/Orders/TodayOrders';
import Inventory from '../pages/dashboard/Product/Inventory';
import SubCategories from '../pages/dashboard/Product/SubCategories';
import ApproveProduct from '../pages/dashboard/Product/ApproveProduct';
import Categories from '../pages/dashboard/Product/Categories';
import AddCategoiesForm from '../pages/dashboard/Product/Form/AddCategoiesForm';
import AddSubCategoriesForm from '../pages/dashboard/Product/Form/AddSubCategoiesForm';
import ReplacementOrders from '../pages/dashboard/Orders/ReplacementOrders';
import InActiveCustomers from '../pages/dashboard/Customers/InActiveCustomers';
import DeliveryVendors from '../pages/dashboard/Customers/DeliveryVendors';
import AddDeliveryVendor from '../pages/dashboard/Customers/AddDeliveryVendorForm/AddDeliveryVendor';


const PrivateRoutes: FC = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'));
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'));
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'));
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'));
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'));
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'));

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after successful login/registration */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />

        {/* Pages */}
         
       <Route path="productdocuments" element={<ProductDetails/>} />


        <Route path="products" element={<Products/>} />
        <Route path="addproducts" element={<AddProject/>} />
        <Route path="productdetails" element={<ProductDetails/>} />
        <Route path="inventory" element={<Inventory/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="addcategoriesform" element={<AddCategoiesForm/>} />
        <Route path="addsubcategoriesform" element={<AddSubCategoriesForm/>} />
        
        <Route path="subcategories" element={<SubCategories/>} />
        <Route path="approveproduct" element={<ApproveProduct/>} />
        

        <Route path="replacementorders" element={<ReplacementOrders/>} />
        <Route path="orderdetails" element={<OrderDetails/>} />
        <Route path="todayorder" element={<TodayOrders/>} />
        <Route path="deliveredorder" element={<DeliveredOrders/>} />
        <Route path="pandingorder" element={<PendingOrders/>} />
        <Route path="cancelledorder" element={<ProductCancelled/>} />
        <Route path="returnorder" element={<ProductReturn/>} />
        


        <Route path="customer" element={<Customers/>} />
        <Route path="inactivecustomers" element={<InActiveCustomers/>} />
        <Route path="deliveryvendors" element={<DeliveryVendors/>} />
        <Route path="adddeliveryvendor" element={<AddDeliveryVendor/>} />
        
        




        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route path='crafted/pages/profile/*' element={<SuspensedView><ProfilePage /></SuspensedView>} />
        <Route path='crafted/pages/wizards/*' element={<SuspensedView><WizardsPage /></SuspensedView>} />
        <Route path='crafted/widgets/*' element={<SuspensedView><WidgetsPage /></SuspensedView>} />
        <Route path='crafted/account/*' element={<SuspensedView><AccountPage /></SuspensedView>} />
        <Route path='apps/chat/*' element={<SuspensedView><ChatPage /></SuspensedView>} />
        <Route path='apps/user-management/*' element={<SuspensedView><UsersPage /></SuspensedView>} />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary');
  TopBarProgress.config({
    barColors: { '0': baseColor },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };


