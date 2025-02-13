
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Pencil, Mail, MapPin, Phone, FileText, Plus, Palette, Brush, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
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
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-600">
                  Artist
                </Badge>
                {user.experience && (
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-600">
                    {user.experience} Experience
                  </Badge>
                )}
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600">{user.bio || "Add bio"}</p>
            </div>

            {/* Artist Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Specialization */}
              <div className="flex items-center gap-2 text-blue-500">
                <Palette className="h-4 w-4" />
                <span className="text-sm">{user.specialization || "Add specialization"}</span>
              </div>

              {/* Art Style */}
              <div className="flex items-center gap-2 text-blue-500">
                <Brush className="h-4 w-4" />
                <span className="text-sm">{user.artStyle || "Add art style"}</span>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-2 text-blue-500">
                <DollarSign className="h-4 w-4" />
                <span className="text-sm">{user.pricing || "Add pricing details"}</span>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 text-blue-500">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{user.availability || "Add availability"}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-blue-500">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{user.location || "Add location"}</span>
              </div>

              {/* Mobile */}
              <div className="flex items-center gap-2 text-blue-500">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{user.mobile || "Add contact number"}</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{user.email}</span>
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
