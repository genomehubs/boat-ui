```template
id: oxfordPlotByTaxonLepidoptera
title: Oxford plot using Lepidoptera BUSCO genes assigned to Merian units
description: |
  Show locations of all Lepidoptera BUSCO genes shared between a pair of species, coloured by Merian unit assignment
valueA_example: Nymphalis io
valueA_label: Taxon A
valueA_description: |
  Taxon name or ID to plot on x-axis
valueB_example: Erynnis tages
valueB_label: Taxon B
valueB_description: |
  Taxon name or ID to plot on y-axis
url:
  path: /search
  query: assembly_id=queryA.assembly_id,queryB.assembly_id AND collate(sequence_id,busco_gene) AND feature_type=lepidoptera-busco-gene AND ancestral_unit
  queryA: assembly--tax_name({valueA}) AND refseq_category=representative genome,reference genome
  queryB: assembly--tax_name({valueB}) AND refseq_category=representative genome,reference genome
  cat: ancestral_unit[32]
  xOpts: ";;;;{valueA}"
  yOpts: ";;;;{valueB}"
  result: feature
  taxonomy: ncbi
  report: oxford
```
