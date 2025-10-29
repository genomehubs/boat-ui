```template
id: oxfordPlotByAssembly
title: Oxford plot using BUSCO genes by assembly
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
valueC_example: lepidoptera_odb10
valueC_label: BUSCO lineage
valueC_description: |
  Odb10 BUSCO lineage to use for comparison
url:
  path: /search
  query: assembly_id={valueA},{valueB} AND collate(sequence_id,name) AND feature_type={valueC}-busco-gene
  result: feature
  taxonomy: ncbi
  report: oxford
```
