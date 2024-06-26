import { Thread } from "@/components/ui/assistant-ui/thread";

export default function Home() {
  return (
    <div className="h-full"style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      height: "100vh",
      width: "100%",
    
    }}>
      <Thread/>
    </div>
  );
}
