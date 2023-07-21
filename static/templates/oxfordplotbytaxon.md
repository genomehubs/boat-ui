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
url: |
  /search?query=assembly_id%3DqueryA.assembly_id%2CqueryB.assembly_id%20AND%20collate%28sequence_id,busco_gene%29%20AND%20feature_type%3D{valueC}-busco-gene%20AND%20ancestral_unit&queryA=assembly--tax_name%28{valueA}%29%20AND%20refseq_category%3Drepresentative%20genome%2Creference%20genome&queryB=assembly--tax_name%28{valueB}%29%20AND%20refseq_category%3Drepresentative%20genome%2Creference%20genome&result=feature&taxonomy=ncbi&report=oxford#assembly_id%3DqueryA.assembly_id%2CqueryB.assembly_id%20AND%20collate%28sequence_id,busco_gene%29%20AND%20feature_type%3D{valueC}-busco-gene
```
