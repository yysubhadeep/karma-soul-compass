
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getABTestStats, resetABTestData } from '../utils/abTesting';
import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';

const ABTestStats: React.FC = () => {
  const [stats, setStats] = React.useState(getABTestStats());

  const refreshStats = () => {
    setStats(getABTestStats());
  };

  const handleReset = () => {
    resetABTestData();
    setStats(getABTestStats());
  };

  const totalVisits = stats.main.visits + stats.vedic.visits;
  const totalConversions = stats.main.conversions + stats.vedic.conversions;
  const overallConversionRate = totalVisits > 0 ? (totalConversions / totalVisits) * 100 : 0;

  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <BarChart3 className="h-6 w-6" />
          <span>A/B Test Results</span>
        </h2>
        <div className="space-x-2">
          <Button onClick={refreshStats} variant="outline" size="sm">
            Refresh
          </Button>
          <Button onClick={handleReset} variant="destructive" size="sm">
            Reset Data
          </Button>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Total Visits</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalVisits}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center space-x-2">
              <Target className="h-4 w-4" />
              <span>Total Conversions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalConversions}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Overall Rate</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallConversionRate.toFixed(1)}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Variant Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg text-blue-700">Main Homepage (/)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Visits</p>
                <p className="text-xl font-bold">{stats.main.visits}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Conversions</p>
                <p className="text-xl font-bold">{stats.main.conversions}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-blue-600">{stats.main.conversionRate.toFixed(1)}%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-lg text-orange-700">Vedic Homepage (/vedicscience)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Visits</p>
                <p className="text-xl font-bold">{stats.vedic.visits}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Conversions</p>
                <p className="text-xl font-bold">{stats.vedic.conversions}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-orange-600">{stats.vedic.conversionRate.toFixed(1)}%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Winner Analysis */}
      {totalVisits > 10 && (
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-lg text-green-700">Current Leader</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.main.conversionRate > stats.vedic.conversionRate ? (
              <p className="text-lg">
                <strong>Main Homepage</strong> is performing better with {stats.main.conversionRate.toFixed(1)}% conversion rate
              </p>
            ) : stats.vedic.conversionRate > stats.main.conversionRate ? (
              <p className="text-lg">
                <strong>Vedic Homepage</strong> is performing better with {stats.vedic.conversionRate.toFixed(1)}% conversion rate
              </p>
            ) : (
              <p className="text-lg">Both variants are performing equally</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ABTestStats;
