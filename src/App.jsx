// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home page components
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ImpactStats from "./components/ImpactStats";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import ViewImpacts from './components/ViewImpacts';

// Dashboard components
import Sidebar from "./components/NGO/Sidebar";
import Header from "./components/NGO/Header";
import DashboardMetrics from "./components/NGO/DashboardMetrics";
import UpcomingEvents from "./components/NGO/UpcomingEvents";
import RecentActivities from "./components/NGO/RecentActivities";
import AIContentCreation from "./components/NGO/AIContentCreation";
import AISummaryReports from "./components/NGO/AISummaryReports";
import CreateDrive from "./components/NGO/CreateDrive";
import VolunteerAnalysis from "./components/NGO/VolunteerAnalysis";


import { dashboardMetrics } from "./data/metrics";
import { upcomingEvents } from "./data/events";
import { recentActivities } from "./data/activities";

const Home = () => (
  <div className="font-sans">
    <Navbar />
    <HeroCarousel />
    <ImpactStats />
    <Testimonials />
    <CallToAction />
    <Footer />
  </div>
);

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
      <div className="ml-72 flex-1 min-h-screen bg-blue-50 overflow-y-auto">
        <Header />
        <main className="p-6">
          {activeMenuItem === "dashboard" && (
            <>
              <DashboardMetrics metrics={dashboardMetrics} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <UpcomingEvents events={upcomingEvents} />
                <RecentActivities activities={recentActivities} />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impacts" element={<ViewImpacts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/ai-content" element={<AIContentCreation />} />
        <Route path="/dashboard/ai-reports" element={<AISummaryReports />} />
        <Route path="/dashboard/create-drive" element={<CreateDrive />} />
        <Route path="/dashboard/volunteer-analysis" element={<VolunteerAnalysis />} />
      </Routes>
    </Router>
  );
}