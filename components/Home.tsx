import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, BarChart2, CheckCircle, UploadCloud } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to FundR</h1>
        <p className="max-w-xl mx-auto text-lg opacity-90">
          Manage your revenue, track transactions, and upload files seamlessly
          with our smart dashboard.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-100"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-indigo-600"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center">
          <UploadCloud className="mx-auto h-12 w-12 text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">File Upload</h3>
          <p className="text-gray-600">
            Easily upload and manage files with drag & drop functionality.
          </p>
        </div>
        <div className="text-center">
          <BarChart2 className="mx-auto h-12 w-12 text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Analytics</h3>
          <p className="text-gray-600">
            Visualize your performance with interactive charts and graphs.
          </p>
        </div>
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
          <p className="text-gray-600">
            Keep everything in one place with our intuitive dashboard design.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <blockquote className="p-6 bg-white rounded-lg shadow">
            <p>"FundR made my work so much easier. Highly recommend!"</p>
            <footer className="mt-4 text-sm text-gray-500">— Sarah K.</footer>
          </blockquote>
          <blockquote className="p-6 bg-white rounded-lg shadow">
            <p>"The charts and analytics are exactly what I needed."</p>
            <footer className="mt-4 text-sm text-gray-500">— James D.</footer>
          </blockquote>
          <blockquote className="p-6 bg-white rounded-lg shadow">
            <p>"Uploading files has never been this smooth."</p>
            <footer className="mt-4 text-sm text-gray-500">— Aisha L.</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <Button
          size="lg"
          className="bg-white text-indigo-600 hover:bg-gray-100"
        >
          Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  );
};

export default Home;
