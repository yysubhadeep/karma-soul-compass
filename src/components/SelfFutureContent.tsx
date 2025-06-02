
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mirror, Compass, Heart, Eye } from "lucide-react";
import { getArchetypeData } from '@/data/archetypeData';

interface SelfFutureContentProps {
  archetype: string;
}

const SelfFutureContent = ({ archetype }: SelfFutureContentProps) => {
  const archetypeData = getArchetypeData(archetype);

  return (
    <div className="space-y-4">
      <Tabs defaultValue="soul-mirror" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-white/70 rounded-lg">
          <TabsTrigger value="soul-mirror" className="text-xs py-2 px-2 rounded-md touch-manipulation">
            <div className="flex flex-col items-center space-y-1">
              <Mirror className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs">Soul Mirror</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="dharma-compass" className="text-xs py-2 px-2 rounded-md touch-manipulation">
            <div className="flex flex-col items-center space-y-1">
              <Compass className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs">Dharma Compass</span>
            </div>
          </TabsTrigger>
        </TabsList>

        {/* Soul Mirror Tab */}
        <TabsContent value="soul-mirror" className="space-y-4 mt-4">
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardHeader className="pb-3 px-4 pt-4">
              <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                <Mirror className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                <span>Soul Mirror - Deep Self-Discovery</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                These questions help you understand your deepest patterns, motivations, and authentic self as a {archetype}.
              </p>
              
              <div className="space-y-3">
                {archetypeData.selfDiscoveryQuestions.slice(0, 10).map((question, index) => (
                  <div key={index} className="bg-white/60 rounded-lg p-3 border border-purple-100">
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold text-sm flex-shrink-0 mt-1">
                        {(index + 1).toString().padStart(2, '0')}.
                      </span>
                      <p className="text-gray-800 text-sm leading-relaxed">{question}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-3 border border-purple-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Heart className="h-4 w-4 text-purple-600" />
                  <h4 className="text-sm font-semibold text-purple-800">Reflection Practice</h4>
                </div>
                <p className="text-xs text-purple-700">
                  Journal about 2-3 questions that resonate most deeply. Notice what emotions or memories arise as you reflect.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Dharma Compass Tab */}
        <TabsContent value="dharma-compass" className="space-y-4 mt-4">
          <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardHeader className="pb-3 px-4 pt-4">
              <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                <Compass className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                <span>Dharma Compass - Future Path</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                These questions guide you toward your highest potential and life purpose as a {archetype}.
              </p>
              
              <div className="space-y-3">
                {archetypeData.futurePathQuestions.slice(0, 10).map((question, index) => (
                  <div key={index} className="bg-white/60 rounded-lg p-3 border border-emerald-100">
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-600 font-bold text-sm flex-shrink-0 mt-1">
                        {(index + 1).toString().padStart(2, '0')}.
                      </span>
                      <p className="text-gray-800 text-sm leading-relaxed">{question}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-3 border border-emerald-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Eye className="h-4 w-4 text-emerald-600" />
                  <h4 className="text-sm font-semibold text-emerald-800">Vision Practice</h4>
                </div>
                <p className="text-xs text-emerald-700">
                  Choose 3 questions that spark the strongest vision for your future. Visualize yourself living these answers.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SelfFutureContent;
