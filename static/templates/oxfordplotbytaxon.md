```template
id: oxfordPlotByTaxon
title: Oxford plot using BUSCO genes
description: |
  Show locations of all BUSCO genes shared between a pair of species
valueA_example: Nymphalis io
valueA_label: Taxon A
valueA_description: |
  Taxon name or ID to plot on x-axis
valueB_example: Erynnis tages
valueB_label: Taxon B
valueB_description: |
  Taxon name or ID to plot on y-axis
valueC_example: lepidoptera
valueC_label: BUSCO lineage
valueC_description: |
  Odb10 BUSCO lineage to use for comparison
url:
  path: /search
  query: assembly_id=queryA.assembly_id,queryB.assembly_id AND collate(sequence_id,busco_gene) AND feature_type={valueC}-busco-gene AND ancestral_unit
  queryA: assembly--tax_name({valueA}) AND refseq_category=representative genome,reference genome
  queryB: assembly--tax_name({valueB}) AND refseq_category=representative genome,reference genome
  result: feature
  taxonomy: ncbi
  report: oxford
```
