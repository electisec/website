import FlickeringGrid from "@/components/ui/flickering-grid";
import NumberTicker from "@/components/ui/number-ticker";

export function AuditStats() {
  return (
    <div className="relative h-[75vh] rounded-lg w-full bg-background overflow-hidden">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#080444"
        maxOpacity={0.1}
        flickerChance={0.1}
        height={1000}
        width={1600}
      />
      <div className="m-48 flex flex-col gap-16">
        <div className="grid grid-cols-3 gap-2 ">
          <div className="flex flex-col items-center justify-center cols-span-1">
            <NumberTickerDemo num={100} text="Mn +" />
            <p>TVL Secured</p>
          </div>
          <div className="flex flex-col items-center justify-center cols-span-1">
            <NumberTickerDemo num={17} text="" />
            <p>New Customers in 2024</p>
          </div>
          <div className="flex flex-col items-center justify-center cols-span-1">
            <NumberTickerDemo num={80} text="%" />
            <p>Return Customers</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center justify-center cols-span-1">
            <NumberTickerDemo num={150} text="+" />
            <p>Fellows Graduated</p>
          </div>
          <div className="flex flex-col items-center justify-center cols-span-1">
            <NumberTickerDemo num={8} text="" />
            <p>Fellowships Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NumberTickerDemo({ num, text }: { num: number; text: string }) {
  return (
    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={num} />
      {text}
    </p>
  );
}
