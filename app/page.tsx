import type { ReactNode } from "react";

import { Search } from "./search";

export default function IndexPage(): ReactNode {
  return (
    <main>
      <h1>Search</h1>
      <Search />
    </main>
  );
}
