import React from 'react';
import { Section } from '../components/common/Section';

const ProfilePage = () => {
  return (
    <Section>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1 text-gray-900">John Doe</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-gray-900">john.doe@example.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Preferences</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    checked
                    readOnly
                  />
                  <label className="ml-2 text-gray-700">Receive email notifications</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    checked
                    readOnly
                  />
                  <label className="ml-2 text-gray-700">Subscribe to newsletter</label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
              <div className="space-y-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Change Password
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProfilePage;