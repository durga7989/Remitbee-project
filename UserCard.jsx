import { Mail, Phone, Briefcase, MapPin, Globe } from 'lucide-react';

export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-24"></div>

      <div className="relative px-6 pb-6">
        <div className="absolute -top-12 left-6">
          <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-600">
              {user.name.charAt(0)}
            </span>
          </div>
        </div>

        <div className="pt-16">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h3>
          <p className="text-sm text-gray-500 mb-4">@{user.username}</p>

          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
              <span className="text-sm truncate">{user.email}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
              <span className="text-sm">{user.phone}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
              <span className="text-sm">{user.address.city}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Briefcase className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
              <span className="text-sm truncate">{user.company.name}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Globe className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
              <span className="text-sm truncate">{user.website}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
