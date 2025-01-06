http://localhost:3000/?persons%5BrefinementList%5D%5Bfunctions%5D%5B0%5D=K%C3%A4mmerer

=> shows "Kämmerer, wirkl." with a facet count of 195, but should be 2738

=> this used to work correctly with `algoliasearch-helper@3.22.5`.
  you can check by adding the following to `package.json` and run `pnpm install` again:

  ```json
  "pnpm": {
    "overrides": {
      "algoliasearch-helper": "3.22.5"
    }
  },
  ```

---

http://localhost:3000/?persons%5BrefinementList%5D%5Bfunctions%5D%5B0%5D=K%C3%A4mmerer&persons%5BrefinementList%5D%5Bfunctions%5D%5B1%5D=Leibschiffmeister

=> "Leibschiffmeister" has a count of 0, but should have a count of 12 - this is because the facet count for "Leibschiffmeister" is not included in the first maxValuesPerFacet

=> this is an issue in all versions
