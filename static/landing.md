# BUSCOs on a Tree (:hub)

:hub is built using GenomeHubs 2, to present BUSCO results and related analyses and metadata for the majority of Eukaryotic genome assemblies across the tree of life.

Metadata in :hub include proportions of GC and masked bases and BUSCO statuses for all relevant lineages for each assembly.

# Oxford plots

:hub allows exploration of colineraity between pairs of assemblies through Oxford plots using BUSCO gene positions.

:::grid{container direction="row" toggle title="Oxford plot examples" spacing="1"}

::report{report="oxford" x="assembly_id=GCA_905147225.1,GCA_905147235.1 AND collate(sequence_id,busco_gene) AND feature_type=metazoa-busco-gene" plotRatio="1.5" pointSize="10" result="feature" item xs=6}

::report{report="oxford" x="assembly_id=GCA_905147225.1,GCA_905147235.1 AND collate(sequence_id,busco_gene) AND feature_type=metazoa-busco-gene AND sequence_id = LR990104.1,LR990084.1,LR990095.1" plotRatio="1.5" pointSize="10" result=feature item xs=6}

:::

# BUSCO counts

Busco identities are recorded for each taxon, allowing plots of counts in each category.

:::grid{container direction="row" toggle title="BUSCO counts" spacing="1"}

::report{report="scatter" x="length(lepidoptera_odb10_missing) AND tax_tree(7088)" y="length(lepidoptera_odb10_fragmented)" rank="species" includeEstimates="true" plotRatio="auto" pointSize="15" result="taxon" taxonomy="ncbi" item xs=12 ratio=2}

:::
