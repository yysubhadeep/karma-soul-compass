
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface PersonalInfoCardProps {
  formData: FormData;
}

const PersonalInfoCard = ({ formData }: PersonalInfoCardProps) => (
  <Card className="border-orange-200">
    <CardContent className="p-4">
      <h2 className="text-lg font-bold text-gray-900 mb-3 text-center">{formData.name}</h2>
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-orange-600" />
            <span className="text-gray-600">Birth Date</span>
          </div>
          <span className="font-medium">{formData.dateOfBirth}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-orange-600" />
            <span className="text-gray-600">Birth Time</span>
          </div>
          <span className="font-medium">{formData.timeOfBirth}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-orange-600" />
            <span className="text-gray-600">Birth Place</span>
          </div>
          <span className="font-medium text-right">{formData.placeOfBirth}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default PersonalInfoCard;
