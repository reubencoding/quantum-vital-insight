import { useState } from "react";
import PatientCard from "@/components/PatientCard";
import VitalSignsChart from "@/components/VitalSignsChart";
import AlertBanner from "@/components/AlertBanner";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Index = () => {
  // Mock patient data
  const patients = [
    {
      name: "Sarah Johnson",
      age: 45,
      id: "PT-001",
      status: "stable" as const,
      heartRate: 72,
      temperature: 98.6,
      bloodPressure: "120/80",
      oxygen: 98,
    },
    {
      name: "Michael Chen",
      age: 62,
      id: "PT-002",
      status: "warning" as const,
      heartRate: 95,
      temperature: 99.2,
      bloodPressure: "140/90",
      oxygen: 94,
    },
    {
      name: "Emily Rodriguez",
      age: 38,
      id: "PT-003",
      status: "stable" as const,
      heartRate: 68,
      temperature: 98.4,
      bloodPressure: "118/78",
      oxygen: 99,
    },
  ];

  // Mock chart data
  const heartRateData = [
    { time: "00:00", value: 72 },
    { time: "04:00", value: 68 },
    { time: "08:00", value: 75 },
    { time: "12:00", value: 82 },
    { time: "16:00", value: 78 },
    { time: "20:00", value: 72 },
  ];

  const temperatureData = [
    { time: "00:00", value: 98.4 },
    { time: "04:00", value: 98.2 },
    { time: "08:00", value: 98.6 },
    { time: "12:00", value: 98.8 },
    { time: "16:00", value: 98.7 },
    { time: "20:00", value: 98.5 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 medical-gradient opacity-90" />
        <img 
          src={heroImage} 
          alt="Remote Patient Monitoring Dashboard" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-medium">
              <Activity className="h-4 w-4 text-primary animate-pulse-glow" />
              <span className="text-sm font-medium text-foreground">Real-time Monitoring</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Remote Patient Monitoring System
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Advanced healthcare technology for continuous patient vital signs monitoring. 
              Track heart rate, temperature, blood pressure, and oxygen levels in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-card hover:bg-card/90 text-primary shadow-glow">
                <Users className="mr-2 h-5 w-5" />
                View Patients
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          <AlertBanner
            type="warning"
            title="Attention Required"
            message="Patient PT-002 (Michael Chen) showing elevated heart rate - 95 bpm"
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-gradient p-6 rounded-xl border border-border/50 shadow-subtle">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full medical-gradient">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Patients</p>
                <p className="text-3xl font-bold text-foreground">24</p>
              </div>
            </div>
          </div>
          <div className="card-gradient p-6 rounded-xl border border-border/50 shadow-subtle">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-success/20">
                <Heart className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stable Patients</p>
                <p className="text-3xl font-bold text-foreground">22</p>
              </div>
            </div>
          </div>
          <div className="card-gradient p-6 rounded-xl border border-border/50 shadow-subtle">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-warning/20">
                <Activity className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Alerts Today</p>
                <p className="text-3xl font-bold text-foreground">2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Cards */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-foreground mb-6">Active Patients</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patients.map((patient) => (
            <PatientCard key={patient.id} {...patient} />
          ))}
        </div>
      </section>

      {/* Vital Signs Charts */}
      <section className="container mx-auto px-4 py-8 pb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Vital Signs Trends</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <VitalSignsChart
            title="Heart Rate Monitor"
            data={heartRateData}
            color="hsl(var(--primary))"
            unit=" bpm"
          />
          <VitalSignsChart
            title="Temperature Tracking"
            data={temperatureData}
            color="hsl(var(--accent))"
            unit="°F"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
