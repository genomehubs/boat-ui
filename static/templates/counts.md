::breadcrumbs[BUSCO counts]

Plots of BUSCO counts relative to assembly metrics can reveal patterns of BUSCO completeness within and across lineages.

A plot of Eukaryota BUSCO count against assembly span for phyla with at least 10 assemblies in BoaT helps to highlight differences between lineages. The minimum count threshold filters out lower quality assemblies to focus on more complete genome representations.

:::grid{container direction="row" spacing="1" inline}

```report
report: scatter
x: assembly_span AND length(eukaryota_odb10_complete)>=130
y: length(eukaryota_odb10_complete)
rank: species
cat: phylum[11]
includeEstimates: false
yOpts: 130;260;14
plotRatio: 2
scatterThreshold: -1
pointSize: 15
result: taxon
taxonomy: ncbi
xs: 12
```

:::

BoaT provides templates to generate plots of BUSCO counts against assembly statistics or against other busco counts.

:::grid{container direction="row" spacing="1"}

::include{pageId=templates/buscoCountByAssemblyStat.md xs=6}

::include{pageId=templates/buscoCountByBuscoCount.md xs=6}

:::
