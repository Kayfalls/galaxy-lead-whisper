import flowchartImage from "@/assets/ai-lead-generation-flowchart.png";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">AI Lead Generation Agent Flowchart</h1>
        <p className="text-xl text-muted-foreground mb-8">Complete workflow visualization</p>
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img 
            src={flowchartImage} 
            alt="AI Lead Generation Agent Flowchart" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
