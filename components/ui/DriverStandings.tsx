import { DriverStanding } from "../../loaders/drivers/getDriverChampionshipStandings.tsx";
import InfoCard from "site/components/ui/InfoCard.tsx";

interface Props {
  standings: DriverStanding[];
}

function DriverStandings({ standings }: Props) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4 text-card-foreground">Driver Standings</h1>
      <div class="space-y-4">
        {standings.map((standing) => (
          <InfoCard  
            image={standing.driver.avatar}
            name={`${standing.driver.givenName} ${standing.driver.familyName}`}
            position={standing.position} 
            points={standing.points}
          />
        ))}
      </div>
    </div>
  );
}

export default DriverStandings;
