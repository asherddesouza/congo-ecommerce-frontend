"use server";

import React from "react";
import Results from "./page.client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getResults = async (searchQuery: string) => {
  try {
    const response = await fetch(
      `${API_URL}/items?search=${encodeURIComponent(searchQuery)}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
};

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>; // Treat searchParams as a Promise
}) {
  const resolvedSearchParams = await searchParams; // Resolve the Promise
  const searchQuery = resolvedSearchParams.query || ""; // Get the search query from the resolved object
  const results = await getResults(searchQuery); // Fetch results on the server

  return <Results results={results} searchQuery={searchQuery} />;
}
