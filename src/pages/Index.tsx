
import { Pencil, Mail, MapPin, Phone, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col py-12 container px-4 2xl:px-20 mx-auto">
      <div className="relative backdrop-blur-lg bg-white/10 border border-gray-200/20 rounded-2xl p-8 shadow-lg">
        <div className="flex flex-col space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-6">
              <Avatar className="w-24 h-24 rounded-2xl border-2 border-white/20">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-medium text-gray-900">John Doe</h1>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-gray-100"
                  >
                    <Pencil className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500">Profile last updated - 24Mar, 2024</p>
                <Badge variant="secondary" className="mt-2">Fresher</Badge>
              </div>
            </div>
          </div>

          {/* Profile Details Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 bg-white/50">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Add location</p>
                  <Progress value={2} className="h-1 mt-2" />
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 bg-white/50">
                <Phone className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Add mobile number</p>
                  <Progress value={10} className="h-1 mt-2" />
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 bg-white/50">
                <FileText className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Add availability to join</p>
                  <Progress value={10} className="h-1 mt-2" />
                </div>
              </div>
            </div>

            {/* Right Section - Completion Status */}
            <div className="bg-orange-50/50 rounded-xl p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Profile Completion</h3>
                
                {/* Overall Progress */}
                <Progress value={5} className="h-2 mb-4" />
                
                {/* Mobile Verification */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Verify mobile number</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-green-500">↑ 10%</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Add preferred location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-green-500">↑ 2%</span>
                  </div>
                </div>

                {/* Resume */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Add resume</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-green-500">↑ 10%</span>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white">
                  Add 14 missing details
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Email Verification Badge */}
        <div className="absolute top-8 right-8 flex items-center space-x-2">
          <Mail className="h-4 w-4 text-green-500" />
          <span className="text-sm text-gray-600">john.doe@example.com</span>
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Index;
