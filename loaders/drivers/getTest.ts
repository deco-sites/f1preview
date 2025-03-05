import { ImageWidget } from "apps/admin/widgets.ts";
import { ConstructorStanding } from "site/loaders/drivers/getConstructorChampionshipStandings.tsx";

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

// Mock data for testing
export const mockConstructorStandings = {
  MRData: {
    StandingsTable: {
      StandingsLists: [{
        ConstructorStandings: [
          {
            position: "1",
            points: "87",
            wins: "3",
            Constructor: {
              name: "Red Bull Racing",
              nationality: "Austrian"
            }
          },
          {
            position: "2",
            points: "49",
            wins: "0",
            Constructor: {
              name: "Ferrari",
              nationality: "Italian"
            }
          },
          {
            position: "3",
            points: "38",
            wins: "0",
            Constructor: {
              name: "McLaren",
              nationality: "British"
            }
          }
        ]
      }]
    }
  }
};

// Optional: Add a test version of the loader that uses mock data
export const testLoader = async (): Promise<ConstructorStanding[]> => {
  // Add artificial delay of 100ms
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockConstructorStandings.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map((standing: any) => ({
    position: parseInt(standing.position),
    points: parseInt(standing.points),
    wins: parseInt(standing.wins),
    constructor: {
      name: standing.Constructor.name,
      nationality: standing.Constructor.nationality,
    }
  }));
};

export default loader;