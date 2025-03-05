import { ImageWidget } from "apps/admin/widgets.ts";

export interface Driver {
    code: string;
    avatar?: ImageWidget;
    givenName: string;          
    familyName: string;
}

export interface DriverStanding {
    position: number;
    points: number;
    wins?: number;
    driver: Driver;
}

async function loader(): Promise<DriverStanding[]> {
  const response = await fetch(`http://ergast.com/api/f1/2024/driverStandings.json`);
  const data = await response.json();
  
  const driverStandings = data.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings;
  
  if (!driverStandings) {
    return [];
  }

  return driverStandings.map((standing: any) => ({
    position: parseInt(standing.position),
    points: parseInt(standing.points),
    wins: parseInt(standing.wins),
    driver: {
      code: standing.Driver.code,
      givenName: standing.Driver.givenName,
      familyName: standing.Driver.familyName,
    }
  }))
}

export default loader;