import React, { useState } from "react";
import { Link } from "react-router";
import Logo from './RMax.png';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const features = {
    discover: [
      { name: "User Mobile App", href: "/features/user-mobile-app" },
      { name: "Business Webpage", href: "/features/business-webpage" },
    ],
    manage: [
      { name: "Classes", href: "/features/classes" },
      { name: "Courses", href: "/features/courses" },
      { name: "Services", href: "/features/services" },
      { name: "Communication", href: "/features/communication" },
      { name: "Appointments", href: "/features/appointments" },
      { name: "Payments", href: "/features/payments" },
    ],
    grow: [
      { name: "AI Marketing Tools", href: "/features/ai-marketing-tools" },
      { name: "CRM", href: "/features/crm" },
    ],
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">
          <img src={Logo} alt="RMax AI" className="w-full h-full object-contain" />
        </div>
        <nav className="hidden md:flex space-x-6 relative">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              Features
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-max bg-white border rounded-md shadow-lg grid grid-cols-3 gap-6 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Discover</h3>
                  <ul className="space-y-2">
                    {features.discover.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage</h3>
                  <ul className="space-y-2">
                    {features.manage.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Grow</h3>
                  <ul className="space-y-2">
                    {features.grow.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link to="/support" className="text-gray-600 hover:text-gray-900">
            Solutions
          </Link>
        </nav>
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Login</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Try For Free
          </button>
        </div>
      </div>
    </header>
  );
}
