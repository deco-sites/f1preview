import InfoCard from "site/components/ui/InfoCard.tsx";
import { ConstructorStanding } from "site/loaders/drivers/getConstructorChampionshipStandings.tsx";

interface Props {
  standings: ConstructorStanding[];
}

function ConstructorStandings({ standings }: Props) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4 text-card-foreground">Constructor Standings</h1>
      <div className="space-y-4">
        {standings.map((standing) => (
          <InfoCard  
            image={standing.constructor.logo}
            name={standing.constructor.name}
            position={standing.position} 
            points={standing.points}
          />
        ))}
      </div>
    </div>
  );
}

export default ConstructorStandings;
