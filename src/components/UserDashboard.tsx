
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Pencil, Mail, MapPin, Phone, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import EditProfileModal from "@/components/EditProfileModal";

const UserDashboard = () => {
  const { user } = useContext(AppContext);
  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <div className="min-h-screen flex flex-col py-12 px-4 mx-auto max-w-3xl">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section - Profile Photo */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center relative">
              <Plus className="h-6 w-6 text-gray-400" />
              <span className="absolute -bottom-1 text-xs font-medium text-gray-600">Add photo</span>
            </div>
            {/* Progress Circle */}
            <div className="absolute bottom-0 right-0">
              <svg className="w-8 h-8">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#f1f1f1"
                  strokeWidth="3"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#FF0000"
                  strokeWidth="3"
                  strokeDasharray="87.96"
                  strokeDashoffset="83.56"
                  transform="rotate(-90 16 16)"
                />
                <text x="12" y="20" className="text-xs font-medium">5%</text>
              </svg>
            </div>
          </div>

          {/* Right Section - Profile Details */}
          <div className="flex-1 space-y-4">
            {/* Name Section */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-medium text-gray-900">{user.name}</h1>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-6 w-6 text-blue-500"
                  onClick={() => setShowEditProfile(true)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500">Profile last updated - 24Mar, 2024</p>
            </div>

            {/* Profile Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Location */}
              <div className="flex items-center gap-2 text-blue-500">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{user.location || "Add location"}</span>
              </div>

              {/* Mobile */}
              <div className="flex items-center gap-2 text-blue-500">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{user.mobile || "Add mobile number"}</span>
              </div>

              {/* Fresher Badge */}
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                  Fresher
                </Badge>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{user.email}</span>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 text-blue-500">
                <FileText className="h-4 w-4" />
                <span className="text-sm">{user.availability || "Add availability to join"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEditProfile && (
        <EditProfileModal onClose={() => setShowEditProfile(false)} />
      )}
    </div>
  );
};

export default UserDashboard;
