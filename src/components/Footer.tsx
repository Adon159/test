import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium mb-4">Features</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Online study material</li>
              <li>Help students</li>
              <li>Community</li>
              <li>Top rated resources</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Contact Us</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>Email</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Telephone</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-sm font-bold">BRACU STUDENT WELFARE</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;