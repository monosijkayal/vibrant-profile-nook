
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useContext } from "react";
import { AppContext } from "@/context/AppContext";

interface EditProfileModalProps {
  onClose: () => void;
}

const EditProfileModal = ({ onClose }: EditProfileModalProps) => {
  const { user, updateUser } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: user.name || "",
    location: user.location || "",
    mobile: user.mobile || "",
    availability: user.availability || "",
    bio: user.bio || "",
    specialization: user.specialization || "",
    artStyle: user.artStyle || "",
    pricing: user.pricing || "",
    experience: user.experience || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Artist Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Artist Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your artist name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell potential clients about yourself and your artistic journey"
                className="h-24"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Input
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="E.g., Portrait, Landscape, Digital Art"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="artStyle">Art Style</Label>
              <Input
                id="artStyle"
                name="artStyle"
                value={formData.artStyle}
                onChange={handleChange}
                placeholder="E.g., Realistic, Abstract, Anime"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pricing">Starting Price</Label>
              <Input
                id="pricing"
                name="pricing"
                value={formData.pricing}
                onChange={handleChange}
                placeholder="E.g., Starting from $50"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="E.g., 5 years"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="mobile">Contact Number</Label>
              <Input
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your contact number"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="availability">Availability</Label>
              <Input
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="E.g., Available for commissions"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
