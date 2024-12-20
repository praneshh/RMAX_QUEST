import React from 'react';
import { footerLinks } from '../data/footerLinks';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    {link.href ? (
                      <a href={link.href} className="hover:text-white">
                        {link.text}
                      </a>
                    ) : (
                      <span>{link.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
          <p>© 2024 Copyright, All Right Reserved@RMax</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}