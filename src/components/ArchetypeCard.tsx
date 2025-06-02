
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { getArchetypeEmoji } from '@/utils/archetypeUtils';

interface ArchetypeCardProps {
  archetype: string;
  secondaryArchetype: string;
}

const ArchetypeCard = ({ archetype, secondaryArchetype }: ArchetypeCardProps) => (
  <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
    <CardContent className="text-center p-6">
      <div className="text-5xl mb-3">{getArchetypeEmoji(archetype)}</div>
      <h2 className="text-xl font-bold text-orange-800 mb-2">Your Primary KarmaArchetype</h2>
      <div className="text-2xl font-bold text-orange-900 mb-3">{archetype}</div>
      <p className="text-gray-700 text-sm leading-relaxed">
        Based on your psychological analysis, you embody the essence of <strong>{archetype}</strong>.
      </p>
      <div className="bg-white/50 rounded-lg p-3 mt-4">
        <p className="text-sm text-gray-600">
          💫 Your secondary archetype is <strong>{secondaryArchetype}</strong>
        </p>
      </div>
    </CardContent>
  </Card>
);

export default ArchetypeCard;
