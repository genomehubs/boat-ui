# Explore BoaT data

BoaT contains data for over 2,500 public assemblies, based on analyses run for[BlobToolKit](https://blobtoolkit.genomehubs.org) and as part of the [sanger-tol/genomenote pipeline](https://github.com/sanger-tol/genomenote). All assemblies indexed in BoaT are chromosomal, prioritising a single representative assembly (based on NCBI representaive genome assignments) per species. Further assemblies will be added soon along with links to all imported data. For now a subset of imported data are available from [busco.cog.sanger.ac.uk](https://busco.cog.sanger.ac.uk) and [gap.cog.sanger.ac.uk](https://gap.cog.sanger.ac.uk).

:::grid{container direction="row" spacing="1" size=12}

<!-- ```report
report: arc
x: eukaryota_odb10_complete
y: refseq_category AND scaffold_count <= 10000
includeEstimates: true
result: assembly
taxonomy: ncbi
size: 4
caption: Proportion of representative genome assemblies available on BoaT
``` -->

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
x: eukaryota_odb10_complete_count>130 AND tax_tree(2759[Eukaryota]) AND metazoa_odb10_complete_count
y: metazoa_odb10_complete_count
cat: phylum[10]
xOpts: 130;260;14;;eukaryota_odb10 complete BUSCOs
yOpts: 400;1000;7;;metazoa_odb10 complete BUSCOs
scatterThreshold: -1
result: assembly
taxonomy: ncbi
ratio: 2
size: 8
caption: Relative counts of Eukaryota and Metazoa BUSCOs for metazoan assemblies on BoaT
```

_All plots on BoaT are interactive, click on the plots above to search within a bin or click the icon to the top right of each plot to expand and view more options._
:::

## Search templates

We have created a set of advanced search templates to highlight some of the ways to explore the data in :hub. The templates below can be used to generate an oxford plot to compare assemblies of two taxa and to plot assembly metrics in windows along each chromosome of an assembly.

Visit the [templates page](/templates) for more examples.

:::grid{container direction="row" spacing="1"}

::include{pageId=templates/oxfordPlotByTaxon.md size=6 className=unpadded}

::include{pageId=templates/windowPlotByTaxon.md size=6 className=unpadded}

::grid[&nbsp;&nbsp;more [oxford plot templates](/templates/oxford)]{size=6}
::grid[&nbsp;&nbsp;more [window-based templates](/templates/windows)]{size=6}

:::

## Ribbon plots

:hub allows exploration of synteny through ribbon plots between pairs of complete assemblies or subsets of chromosomes

```report
report: ribbon
x: assembly_id=queryA.assembly_id,queryB.assembly_id AND collate(sequence_id,name) AND feature_type=lepidoptera_odb10-busco-gene AND status!=duplicated
queryA: assembly--tax_name(Hypena proboscidalis) AND refseq_category=representative genome,reference genome
queryB: assembly--tax_name(Laspeyria flexula) AND refseq_category=representative genome,reference genome
xOpts: ;;;;Hypena proboscidalis
yOpts: ;;;;Laspeyria flexula
cat: merian_unit[32]
compactLegend: true
reorient: true
result: feature
taxonomy: ncbi
ratio: 2
```

## Window statistic plots

```report
report: scatter
x: midpoint_proportion AND assembly_id=queryA.assembly_id AND feature_type=window-1000000 AND gc
xField: midpoint_proportion
queryA: assembly--tax_name(Pieris brassicae)
y: gc
cat: sequence_id[31]
includeEstimates: true
plotRatio: auto
scatterThreshold: -1
pointSize: 15
result: feature
taxonomy: ncbi
ratio: 2
```

## BUSCO counts

Busco identities are recorded for each taxon, allowing plots of BUSCO counts against other assembly metrics.

```report
report: scatter
x: tax_tree(Lepidoptera) AND assembly_span AND lepidoptera_odb10_complete
y: lepidoptera_odb10_complete_count
rank: species
cat: family[6]
includeEstimates: false
scatterThreshold: -1
result: taxon
taxonomy: ncbi
size: 12
ratio: 2
caption: Lepidoptera BUSCO completeness against assembly span for the Lepidoptera families represented in BoaT
```
