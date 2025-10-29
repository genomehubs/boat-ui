```template
id: buscoCountByBuscoCount
title: Scatter plot of BUSCO counts between BUSCO lineages
description: |
  Show counts of BUSCO genes for lineage A relative to counts for lineage B
valueA_example: nematoda_odb10
valueA_label: BUSCO lineage A
valueA_description: |
  BUSCO lineage to plot counts for on the x-axis. Should be most specific lineage.
valueB_example: metazoa_odb10
valueB_label: BUSCO lineage B
valueB_description: |
  BUSCO lineage to plot counts for on the y-axis. Should contain lineage A
valueC_example: family
valueC_label: Category
valueC_description: |
  Category to use to colour points on the plot. Optional value in square brackets is number of categories to show
url:
  path: /search
  query: "{valueA}_complete_count AND {valueB}_complete_count"
  y: "{valueB}_complete_count"
  rank: species
  cat: "{valueC}"
  report: scatter
  includeEstimates: false
  scatterThreshold: -1
  pointSize: 15
  result: taxon
  taxonomy: ncbi
```
