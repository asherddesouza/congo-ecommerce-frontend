"use server";

import Home from "./page.client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getSomeData = async () => {
  try {
    let data = await fetch(`${API_URL}/home`);
    let testData = await data.json();
    return testData;

    console.log("Data fetched from API:", testData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default async function Index() {
  const data = await getSomeData();
  console.log(`type: ${typeof data}`);

  return (
    <div>
      <Home fetchData={data.message} />;
    </div>
  );
}
