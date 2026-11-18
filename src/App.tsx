import { Navigate, Route, Routes } from "react-router-dom";

import { SiteLayout } from "./components/SiteLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ServicePage } from "./pages/ServicePage";
import BusinessOperationsAIAssistant from "./pages/BusinessOperationsAIAssistant";
import ManagedServices from "./pages/ManagedServices";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="managed-services" element={<ManagedServices />} />
        <Route path="application-development" element={<ApplicationDevelopment />} />
        <Route path="data-analytics" element={<ServicePage />} />
        <Route path="business-automation" element={<ServicePage />} />
        <Route path="software-products" element={<ServicePage />} />

        <Route
          path="business-operations-ai-assistant"
          element={<BusinessOperationsAIAssistant />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
