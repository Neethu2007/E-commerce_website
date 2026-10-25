/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sri Maneeshwara Super Market - Main Application
 * Serving Annur, Kumarankundru, Pogalur, and Kovilpalayam in Coimbatore district.
 */

import React from "react";
import { StoreProvider, useStore } from "./context/StoreContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./components/HomeView";
import { AllGroceriesView } from "./components/AllGroceriesView";
import { OffersView } from "./components/OffersView";
import { OrderTrackingView } from "./components/OrderTrackingView";
import { AboutContactView } from "./components/AboutContactView";
import { LocationModal } from "./components/LocationModal";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutModal } from "./components/CheckoutModal";
import { OrderConfirmationModal } from "./components/OrderConfirmationModal";
import { StoreOwnerModal } from "./components/StoreOwnerModal";

const AppContent: React.FC = () => {
  const { currentView } = useStore();

  const renderCurrentView = () => {
    switch (currentView) {
      case "home":
        return <HomeView />;
      case "groceries":
      case "dairy":
      case "deals":
        return <AllGroceriesView />;
      case "offers":
        return <OffersView />;
      case "track":
        return <OrderTrackingView />;
      case "about":
      case "contact":
        return <AboutContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header with Search, Location & Language Selector */}
      <Header />

      {/* Main Page Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {renderCurrentView()}
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Global Interactive Modals & Drawers */}
      <LocationModal />
      <CartDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />
      <StoreOwnerModal />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}
