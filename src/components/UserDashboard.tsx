
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
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Profile Photo */}
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center relative">
              <Plus className="h-8 w-8 text-gray-400" />
              <span className="absolute -bottom-1 text-xs font-medium text-gray-600">Add photo</span>
            </div>
          </div>

          {/* Name and Edit Button */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h1 className="text-2xl font-medium text-gray-900">{user.name}</h1>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-6 w-6 text-blue-500"
                onClick={() => setShowEditProfile(true)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </div>

            {/* Badges */}
            <div className="flex gap-2 justify-center mb-4">
              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-600">
                Artist
              </Badge>
              {user.experience && (
                <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-600">
                  {user.experience} Experience
                </Badge>
              )}
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-600 max-w-lg mx-auto mb-6">
              {user.bio || "Add bio"}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Professional Info */}
          <div className="space-y-4">
            <h2 className="font-medium text-gray-900 mb-4">Professional Details</h2>
            
            {/* Specialization */}
            <div className="flex items-center gap-3 text-gray-700">
              <Palette className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Specialization</p>
                <p className="text-sm text-gray-600">{user.specialization || "Add specialization"}</p>
              </div>
            </div>

            {/* Art Style */}
            <div className="flex items-center gap-3 text-gray-700">
              <Brush className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Art Style</p>
                <p className="text-sm text-gray-600">{user.artStyle || "Add art style"}</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-3 text-gray-700">
              <DollarSign className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Starting Price</p>
                <p className="text-sm text-gray-600">{user.pricing || "Add pricing details"}</p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 text-gray-700">
              <Clock className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Availability</p>
                <p className="text-sm text-gray-600">{user.availability || "Add availability"}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h2 className="font-medium text-gray-900 mb-4">Contact Information</h2>

            {/* Location */}
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-gray-600">{user.location || "Add location"}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Phone Number</p>
                <p className="text-sm text-gray-600">{user.mobile || "Add contact number"}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-gray-600">{user.email}</p>
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
