```template
id: oxfordPlotByAssembly
title: Oxford plot using BUSCO genes
description: |
  Show locations of all BUSCO genes shared between a pair of assemblies
valueA_example: GCA_905147045.1
valueA_label: Assembly accession A
valueA_description: |
  Assembly GCA accession to plot on x-axis
valueB_example: GCA_905147235.1
valueB_label: Assembly accession B
valueB_description: |
  Assembly GCA accession to plot on y-axis
valueC_example: lepidoptera
valueC_label: BUSCO lineage
valueC_description: |
  Odb10 BUSCO lineage to use for comparison
url: |
  /search?query=assembly_id%3D{valueA}%2C{valueB}%20AND%20collate%28sequence_id,busco_gene%29%20AND%20feature_type%3D{valueC}-busco-gene&result=feature&taxonomy=ncbi&report=oxford#assembly_id%3D{valueA}%2C{valueB}%20AND%20collate%28sequence_id,busco_gene%29%20AND%20feature_type%3D{valueC}-busco-gene
```
