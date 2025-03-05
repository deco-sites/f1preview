import ConstructorStandings from "site/components/ui/ConstructorStandings.tsx";
import { ConstructorStanding } from "site/loaders/drivers/getConstructorChampionshipStandings.tsx";
import DriverStandings from "site/components/ui/DriverStandings.tsx";
import { DriverStanding } from "site/loaders/drivers/getDriverChampionshipStandings.tsx";
interface Props {
  driverStandings: DriverStanding[];
  constructorStandings: ConstructorStanding[];
  title?: string;
}

function StandingsOverview({ driverStandings, constructorStandings, title }: Props) {
  return (
    <section className="mb-8">
      {title && <h2 className="text-3xl font-bold mb-6 text-primary">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="max-h-[400px] md:max-h-[600px] overflow-y-auto scrollbar-hide">
          <DriverStandings standings={driverStandings} />
        </div>
        <div className="max-h-[400px] md:max-h-[600px] overflow-y-auto scrollbar-hide">
          <ConstructorStandings standings={constructorStandings} />
        </div>
      </div>
    </section>
  );
}

export default StandingsOverview;