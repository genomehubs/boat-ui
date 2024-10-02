# Explore BoaT data

BoaT contains data for over 2,500 public assemblies, based on analyses run for[BlobToolKit](https://blobtoolkit.genomehubs.org). All assemblies indexed in BoaT have an NCBI refseq category of _representative genome_ or _reference genome_ and a maximum scaffold count of 10,000. Further assemblies meeting these criteria will be added soon from analyses available through the [Genome After Party Portal](https://gap.cog.sanger.ac.uk/).

:::grid{container direction="row" spacing="1"}

```report
report: arc
x: eukaryota_odb10_complete
y: refseq_category AND scaffold_count <= 10000
includeEstimates: true
result: assembly
taxonomy: ncbi
size: 4
caption: Proportion of representative genome assemblies available on BoaT
```

```report
report: xPerRank
x: eukaryota_odb10_complete
includeEstimates: true
result: taxon
taxonomy: ncbi
size: 4
caption: Numbers of taxa available on BoaT
```

```report
report: scatter
x: length(eukaryota_odb10_complete)>130 AND tax_tree(2759[Eukaryota]) AND metazoa_odb10_complete
y: length(metazoa_odb10_complete)
cat: phylum[10]
xOpts: 130;260;14;;eukaryota_odb10 complete BUSCOs
yOpts: 400;1000;7;;metazoa_odb10 complete BUSCOs
scatterThreshold: -1
result: assembly
taxonomy: ncbi
size: 4
caption: Relative counts of Eukaryota and Metazoa BUSCOs for metazoan assemblies on BoaT
```

_All plots on BoaT are interactive, click on the plots above to search within a bin or click the icon to the top right of each plot to expand and view more options._
:::

## Search templates

We have created a set of advanced search templates to highlight some of the ways BoaT can be used to explore BUSCO results other assembly data. The templates below can be used to generate an oxford plot to compare assemblies of two taxa and to plot assembly metrics in windows along each chromosome of an assembly.

Visit the [templates page](/templates) for more examples.

:::grid{container direction="row" spacing="1"}

::include{pageId=templates/oxfordPlotByTaxon.md size=6 className=unpadded}

::include{pageId=templates/windowPlotByTaxon.md size=6 className=unpadded}

::grid[&nbsp;&nbsp;more [oxford plot templates](/templates/oxford)]{size=6}
::grid[&nbsp;&nbsp;more [window-based templates](/templates/windows)]{ size=6}

:::

## Oxford plots

:hub allows exploration of colineraity between pairs of assemblies through Oxford plots using BUSCO gene positions.

:::grid{container direction="row" toggle title="Oxford plot examples" spacing="1" class="padded"}

```report
report: oxford
x: assembly_id=GCA_905147045.1,GCA_905147235.1 AND collate(sequence_id,busco_gene) AND feature_type=metazoa-busco-gene
ratio: 1.5
pointSize: 20
result: feature
size: 6
compactWidth: 900
caption: Oxford plot comparing Metazoa BUSCO genes between two lepidopteran assemblies
```

```report
report: oxford
x: assembly_id=GCA_905147045.1,GCA_905147235.1 AND collate(sequence_id,busco_gene) AND feature_type=lepidoptera-busco-gene AND sequence_id = LR989906.1,LR990085.1,LR989907.1,LR990083.1
cat: ancestral_unit
colorPalette: pride
ratio: 1.5
pointSize: 20
result: feature
size: 6
caption: Detailed view of an oxford plot, coloured by Merian unit, highlighting colinearity on two pairs of chromosomes
```

::grid{size=8}
::grid[&nbsp;&nbsp;more [examples and templates](/templates/oxford)]{size=4}

:::

## BUSCO counts

Busco identities are recorded for each taxon, allowing plots of BUSCO counts against other assembly metrics.

:::grid{container direction="row" toggle title="BUSCO counts" spacing="1" class="padded"}

```report
report: scatter
x: tax_tree(eukaryota) AND assembly_span AND eukaryota_odb10_complete
y: length(eukaryota_odb10_complete)
rank: species
cat: phylum[8]
includeEstimates: false
scatterThreshold: -1
result: taxon
taxonomy: ncbi
size: 12
ratio: 2
caption: Eukaryota BUSCO counts against assembly span for the main phyla represented on BoaT
```

::grid{size=8}
::grid[&nbsp;&nbsp;more [examples and templates](/templates/counts)]{size=4}

:::
