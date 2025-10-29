::breadcrumbs[Oxford plots]

Oxford plots allow you to visualize synteny and rearrangements between pairs of genomes. Patterns in linkage group and gene order conservation differ across lineages.

As the distance between species increases for these cnidarians, fewer shared genes remain in the same order and orientation, though remnants of ancestral chromosomes persist. Such plots help uncover genomic architecture evolution.

:::grid{container direction="row" spacing="1" inline size=12}

```report
report: oxford
x: assembly_id=queryA.assembly_id,queryB.assembly_id AND collate(sequence_id,name) AND feature_type=metazoa_odb10-busco-gene
queryA: assembly--tax_name(Diadumene lineata) AND refseq_category=representative genome,reference genome
queryB: assembly--tax_name(Metridium senile) AND refseq_category=representative genome,reference genome
xOpts: ;;;;Diadumene lineata
yOpts: ;;;;Metridium senile
ratio: 1
result: feature
taxonomy: ncbi
size: 4
```

```report
report: oxford
x: assembly_id=queryA.assembly_id,queryB.assembly_id AND collate(sequence_id,name) AND feature_type=metazoa_odb10-busco-gene
queryA: assembly--tax_name(Diadumene lineata) AND refseq_category=representative genome,reference genome
queryB: assembly--tax_name(Nematostella vectensis) AND refseq_category=representative genome,reference genome
xOpts: ;;;;Diadumene lineata
yOpts: ;;;;Nematostella vectensis
ratio: 1
result: feature
taxonomy: ncbi
size: 4
```

```report
report: oxford
x: assembly_id=queryA.assembly_id,queryB.assembly_id AND collate(sequence_id,name) AND feature_type=metazoa_odb10-busco-gene
queryA: assembly--tax_name(Diadumene lineata) AND refseq_category=representative genome,reference genome
queryB: assembly--tax_name(Haliclystus octoradiatus) AND refseq_category=representative genome,reference genome
xOpts: ;;;;Diadumene lineata
yOpts: ;;;;Haliclystus octoradiatus
ratio: 1
result: feature
taxonomy: ncbi
size: 4
```

:::

BoaT provides templates to generate Oxford plots based on assembly accessions or taxon names, and color BUSCO loci by ancestral linkage groups for nematodes and lepidopterans ([Nigon](https://github.com/pgonzale60/vis_ALG) and [Merian](https://www.biorxiv.org/content/10.1101/2023.05.12.540473v1) units respectively).

:::grid{container direction="row" spacing="1"}

::include{pageId=templates/oxfordPlotByAssembly.md size=6}

::include{pageId=templates/oxfordPlotByTaxon.md size=6}

:::

:::grid{container direction="row" spacing="1"}

::include{pageId=templates/oxfordPlotByTaxonNematoda.md size=6}

::include{pageId=templates/oxfordPlotByTaxonLepidoptera.md size=6}

:::
