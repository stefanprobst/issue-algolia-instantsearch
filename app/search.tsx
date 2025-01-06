"use client";

import "instantsearch.css/themes/satellite.css";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import type { ReactNode } from "react";
import { SearchBox, RefinementList, Hits, Stats } from "react-instantsearch";
import { InstantSearch } from "react-instantsearch-core";

import { searchApiKey, applicationId } from "./algolia.config";

const searchClient = algoliasearch(applicationId, searchApiKey);
const indexName = "persons";

export function Search(): ReactNode {
  return (
    <InstantSearch indexName={indexName} routing searchClient={searchClient}>
      <SearchBox />
      <Stats />
      <RefinementList attribute="functions" searchable={true} showMore />
      <Hits />
    </InstantSearch>
  );
}
