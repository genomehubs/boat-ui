<!--
Content to display immediately below the search box when the user toggles "browse tree"
-->

BoaT uses the [NCBI taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) tree as its default backbone taxonomy. Tap the tree nodes below to browse the taxa available in BoaT or long press to search for data on a particular taxon.

:::grid{container direction=row spacing="1"}

::report{report="tree" x="tax_tree(Eukaryota) AND tax_rank(Phylum)" treeStyle="rect" taxonomy="ncbi" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" levels="subspecies,species,genus,family,order,class,phylum" ratio=3 disableModal="true" caption="Tree of all eukaryotic taxa represented in the NCBI taxonomy" item xs=12}

:::
