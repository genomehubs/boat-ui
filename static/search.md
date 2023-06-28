# Search

Search by taxon, assembly or feature ID

**Example:** type **lepidoptera** in the search box

# Templates

Use the templates below to explore some of the search options available in :hub

:::grid{container direction="row" spacing="1"}

```template
id: lepidopteraOxfordPlot
title: Oxford plot using Lepidoptera BUSCOs
description: |
  Show locations of all Lepidoptera BUSCO genes shared between a pair of assemblies
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
xs: 6
```

```template
id: lepidopteraOxfordPlotByTaxon
title: Oxford plot using Lepidoptera BUSCOs
description: |
  Show locations of all Lepidoptera BUSCO genes shared between a pair of species
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
  /search?query=assembly_id%3DqueryA.assembly_id%2CqueryB.assembly_id%20AND%20collate%28sequence_id,busco_gene%29%20AND%20feature_type%3D{valueC}-busco-gene%20AND%20merian_unit&queryA=assembly--tax_name%28{valueA}%29&queryB=assembly--tax_name%28{valueB}%29&result=feature&taxonomy=ncbi&report=oxford#assembly_id%3DqueryA.assembly_id%2CqueryB.assembly_id%20AND%20collate%28sequence_id,busco_gene%29%20AND%20feature_type%3D{valueC}-busco-gene%20AND%20merian_unit
xs: 6
```

:::
