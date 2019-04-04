---
layout: post
title:  "Reference Genome conventions"
date:   2018-03-05 11:04:00 +1100
categories: update
---

# GFF3 Gene annotations

[Official specification of GFF3](https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md).

[List of feature types](http://vega.archive.ensembl.org/info/about/gene_and_transcript_types.html).

## ENSEMBL

The partial format of ENSEMBL annotations is

```
gene	3073253	3074322	ID=gene:ENSMUSG00000102693;Name=4933401J01Rik;biotype=TEC;gene_id=ENSMUSG00000102693
transcript	3073253	3074322	ID=transcript:ENSMUST00000193812;Parent=gene:ENSMUSG00000102693;Name=4933401J01Rik-201
exon	3073253	3074322	Parent=transcript:ENSMUST00000193812;Name=ENSMUSE00001343744;exon_id=ENSMUSE00001343744
```

## Refseq

## Gencode
