---
layout: post
title:  "Reference Genome conventions"
date:   2018-03-02 15:26:00 +1100
categories: update
---

# Disclaimer

The content presented here is the result of a working bioinformatician stumbling in the dark. 

# Reference Genome Versions

When working with reference genomes and annotations for humans and mouse, I found that they followed different naming conventions for their chromosomes. [The underlying reference genome should be basically the same](http://seqanswers.com/forums/archive/index.php/t-9757.html), though there are difference where mitochondrial genomes versions may not match. The following was written in the context of converting from raw sequencing FASTQ files to a gene count matrix.

## Genome Version Conventions

Annotations should all be based on either hg## or GRC### genomes, they have a matching major version like hg19 and GRCh37. There are also minor versions like GRCh37.1, GRCh37.2 and so on. The minor versions do not change any coordinates relative, they only add new scaffolds. The safest thing would be to obtain your reference genome and genome reference from the same place, but this may not be practical as it would require time consume re-alignments. As long as you keep to the same major version of the genome you should be fine.

## Chromosome naming conventions

Different annotations from different sources tend to have different names for chromosomes, if the chromosomes in the annotations do not match the ones in the BAM file then you will not be able to successfully annotate any features. For example the UCSC convention is to name things chr1, chr2, chr3,..., chrX, chrY and chrM, whereas ENSEMBL uses 1, 2, 3, ..., X, Y and MT. 

