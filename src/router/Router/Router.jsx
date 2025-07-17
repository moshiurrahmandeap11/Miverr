import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/RootLayout/RootLayout";
import Home from "../../pages/Index/Home/Home";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import MiAdmin from "../../pages/MiAdmin/MiAdmin";
import AdminDashboard from "../../pages/MiAdmin/AdminDashboard/AdminDashboard";
import AdminLogin from "../../pages/MiAdmin/AdminLogin/AdminLogin";
import TermsAndConditions from "../../components/Terms/TermsAndConditions";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import ProLayout from "../../layouts/ProLayout/ProLayout";
import Satisfaction from "../../ProComponents/Satisfaction/Satisfaction";
import ProPlans from "../../ProComponents/ProSharedItems/ProNavComponents/ProPlans/ProPlans";
import ProBusinessSolutions from "../../ProComponents/ProBusinessSolutions/ProBusinessSolutions";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/legal-terms",
        Component: TermsAndConditions,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
    ],
  },
  {
    path: "/pro",
    Component: ProLayout,
    children: [
      {
        path: "satisfaction-guarantee",
        Component: Satisfaction,
      },
      {
        path: "plans",
        Component: ProPlans,
      },
      {
        path: "pro-business-solutions",
        Component: ProBusinessSolutions,
      }
    ],
  },
  {
    path: "/",
    Component: AdminLayout,
    children: [
      {
        path: "admin-login",
        Component: AdminLogin,
      },
      {
        path: "admin-dashboard",
        Component: AdminDashboard,
      },
    ],
  },
]);

export default router;
