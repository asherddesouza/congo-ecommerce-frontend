"use server";

import Results from "./page.client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getResults = async (searchParam: string) => {
  try {
    const data = await fetch(
      `${API_URL}/items?search=${encodeURIComponent(searchParam)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default async function Index() {
  const searchParam = "PS5";

  const data = await getResults(searchParam);
  console.log("Search Results", data);

  return (
    <div>
      <Results results={data} query={searchParam} />
    </div>
  );
}
