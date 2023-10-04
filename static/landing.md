# Explore BoaT data

## Oxford plots

:hub allows exploration of colineraity between pairs of assemblies through Oxford plots using BUSCO gene positions.

:::grid{container direction="row" toggle title="Oxford plot examples" spacing="1" class="padded"}

::report{report="oxford" x="assembly_id=GCA_905147045.1,GCA_905147235.1 AND collate(sequence_id,busco_gene) AND feature_type=metazoa-busco-gene" plotRatio="1.5" pointSize="20" result="feature" item xs=6}

::report{report="oxford" x="assembly_id=GCA_905147045.1,GCA_905147235.1 AND collate(sequence_id,busco_gene) AND feature_type=lepidoptera-busco-gene AND sequence_id = LR989906.1,LR990085.1,LR989907.1,LR990083.1" cat="ancestral_unit" colorPalette="pride" plotRatio="1.5" pointSize="20" result=feature item xs=6}

:::

## BUSCO counts

Busco identities are recorded for each taxon, allowing plots of counts in each category.

:::grid{container direction="row" toggle title="BUSCO counts" spacing="1"}

::report{report="scatter" x="length(lepidoptera_odb10_missing) AND tax_tree(7088)" y="length(lepidoptera_odb10_fragmented)" rank="species" includeEstimates="true" plotRatio="auto" pointSize="15" result="taxon" taxonomy="ncbi" item xs=12 ratio=2}

:::
