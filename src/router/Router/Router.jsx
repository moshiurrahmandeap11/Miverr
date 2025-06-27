import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/RootLayout/RootLayout";
import Home from "../../pages/Index/Home/Home"
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import MiAdmin from "../../pages/MiAdmin/MiAdmin";
import AdminDashboard from "../../pages/MiAdmin/AdminDashboard/AdminDashboard";
import AdminLogin from "../../pages/MiAdmin/AdminLogin/AdminLogin";
import TermsAndConditions from "../../components/Terms/TermsAndConditions";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";

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
            }
        ]
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
            }
        ]
    }
])

export default router