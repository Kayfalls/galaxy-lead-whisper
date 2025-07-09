import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  Volume2, 
  Mic, 
  Settings,
  Bot,
  Save
} from "lucide-react";

export default function Voice() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState([1.0]);
  const [pitch, setPitch] = useState([1.0]);
  const [volume, setVolume] = useState([0.8]);

  const voiceOptions = [
    { id: "sarah", name: "Sarah", gender: "Female", accent: "American", description: "Professional, warm tone" },
    { id: "david", name: "David", gender: "Male", accent: "American", description: "Confident, friendly voice" },
    { id: "emma", name: "Emma", gender: "Female", accent: "British", description: "Sophisticated, clear" },
    { id: "alex", name: "Alex", gender: "Male", accent: "Australian", description: "Casual, approachable" }
  ];

  const personalities = [
    { id: "professional", name: "Professional", description: "Formal, business-focused tone" },
    { id: "friendly", name: "Friendly", description: "Warm, conversational approach" },
    { id: "enthusiastic", name: "Enthusiastic", description: "Energetic, positive attitude" },
    { id: "consultative", name: "Consultative", description: "Advisory, solution-focused" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Voice Configuration</h1>
          <p className="text-muted-foreground">
            Configure your AI agent's voice, personality, and conversation style
          </p>
        </div>
        
        <Button className="gap-2">
          <Save className="w-4 h-4" />
          Save Configuration
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Voice Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="w-5 h-5" />
              Voice Selection
            </CardTitle>
            <CardDescription>
              Choose the AI agent's voice characteristics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {voiceOptions.map((voice) => (
                <div key={voice.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{voice.name}</h4>
                      <Badge variant="outline">{voice.gender}</Badge>
                      <Badge variant="secondary">{voice.accent}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{voice.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <input type="radio" name="voice" value={voice.id} className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Voice Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              Voice Settings
            </CardTitle>
            <CardDescription>
              Fine-tune voice parameters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div>
                <Label className="text-sm font-medium">Speaking Speed</Label>
                <div className="mt-2">
                  <Slider
                    value={speed}
                    onValueChange={setSpeed}
                    max={2}
                    min={0.5}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Slow (0.5x)</span>
                    <span>Normal ({speed[0]}x)</span>
                    <span>Fast (2x)</span>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Voice Pitch</Label>
                <div className="mt-2">
                  <Slider
                    value={pitch}
                    onValueChange={setPitch}
                    max={2}
                    min={0.5}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Low (0.5x)</span>
                    <span>Normal ({pitch[0]}x)</span>
                    <span>High (2x)</span>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Volume Level</Label>
                <div className="mt-2">
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={1}
                    min={0}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Quiet (0%)</span>
                    <span>{Math.round(volume[0] * 100)}%</span>
                    <span>Loud (100%)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personality Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              Personality & Tone
            </CardTitle>
            <CardDescription>
              Configure conversation style and personality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Conversation Style</Label>
              {personalities.map((personality) => (
                <div key={personality.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input type="radio" name="personality" value={personality.id} className="w-4 h-4" />
                  <div className="flex-1">
                    <h4 className="font-medium">{personality.name}</h4>
                    <p className="text-sm text-muted-foreground">{personality.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t">
              <Label className="text-sm font-medium">Advanced Options</Label>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm">Use Natural Pauses</Label>
                  <p className="text-xs text-muted-foreground">Add realistic conversation pauses</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm">Handle Interruptions</Label>
                  <p className="text-xs text-muted-foreground">Respond naturally to caller interruptions</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm">Emotional Intelligence</Label>
                  <p className="text-xs text-muted-foreground">Adapt tone based on caller responses</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Script Templates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Conversation Scripts
            </CardTitle>
            <CardDescription>
              Customize conversation flow and responses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label htmlFor="greeting" className="text-sm font-medium">Opening Greeting</Label>
                <Textarea 
                  id="greeting"
                  placeholder="Hi, this is [Agent Name] from [Company]. I'm calling about..."
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="value-prop" className="text-sm font-medium">Value Proposition</Label>
                <Textarea 
                  id="value-prop"
                  placeholder="We help businesses like yours to..."
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="objection" className="text-sm font-medium">Objection Handling</Label>
                <Textarea 
                  id="objection"
                  placeholder="I understand your concern. Let me explain how we can..."
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="closing" className="text-sm font-medium">Call Closing</Label>
                <Textarea 
                  id="closing"
                  placeholder="Based on our conversation, would you be interested in..."
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}