```template
id: oxfordPlotByTaxonNematoda
title: Oxford plot using Nematoda BUSCO genes assigned to Nigon units
description: |
  Show locations of all Nematoda BUSCO genes shared between a pair of species, coloured by Nigon unit assignment
valueA_example: Oscheius tipulae
valueA_label: Taxon A
valueA_description: |
  Taxon name or ID to plot on x-axis
valueB_example: Caenorhabditis tropicalis
valueB_label: Taxon B
valueB_description: |
  Taxon name or ID to plot on y-axis
url:
  path: /search
  query: assembly_id=queryA.assembly_id,queryB.assembly_id AND collate(sequence_id,name) AND feature_type=nematoda_odb10-busco-gene AND ancestral_unit
  queryA: assembly--tax_name({valueA}) AND refseq_category=representative genome,reference genome
  queryB: assembly--tax_name({valueB}) AND refseq_category=representative genome,reference genome
  cat: ancestral_unit[7]
  xOpts: ";;;;{valueA}"
  yOpts: ";;;;{valueB}"
  result: feature
  taxonomy: ncbi
  report: oxford
```
