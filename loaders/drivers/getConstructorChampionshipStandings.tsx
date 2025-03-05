import { ImageWidget } from "apps/admin/widgets.ts";

export interface Constructor {
  logo?: ImageWidget;
  name: string;
  nationality: string;
}

export interface ConstructorStanding {
  position: number;
  points: number;
  wins: number;
  constructor: Constructor;
}

async function loader(): Promise<ConstructorStanding[]> {
  const response = await fetch(`http://ergast.com/api/f1/2024/constructorStandings.json`);
  const data = await response.json();
  
  const constructorStandings = data.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings;
  
  if (!constructorStandings) {
    return [];
  }

  return constructorStandings.map((standing: any) => ({
    position: parseInt(standing.position),
    points: parseInt(standing.points),
    wins: parseInt(standing.wins),
    constructor: {
      name: standing.Constructor.name,
      nationality: standing.Constructor.nationality,
    }
  }))
}

export default loader;