---
title: "Word Vector Series: Part 1 - Intro"
date: 2017-07-19T19:08:23-05:00
---

# Intro to Part 1

In this series, I'll be showing how to use an off-the-shelf model mapping english words to
vectors in your own programs.   We'll start with a simple react application searching a dataset,
then use the word vector model to enhance the search.  We want to search for more than the exact
word the user types.  For example, if I type `sailing`, perhaps we will match the words `boat`, 
`yacht`, etc.

# What is a word vector?

It's a technique used in machine learning where words are translated into a vector space.
You might also see it referred to as an `embedding`.  There are a few different techniques to generate these 
mappings, but that's not the focus of this blog series.  We'll simply be downloading a well-known
pre-trained model and use it in our application: [GoogleNews-vectors-negative300.bin.gz](https://code.google.com/archive/p/word2vec/).

This one was trained off of 100 billion words from google news and is a few years old at this point.
You can find many other pretrained models, some generated with different techniques online;
however, I've had excellent results using this one.

Each word is encoded as a vector in 300 dimensions.  For example, the word `chair` is represented by this array:
`[0.118652, -0.375000, 0.161133, 0.002151, ...295 numbers omitted.. , 0.171875]`.  One interesting feature is
that some intuitive concepts might be embedded in simple linear transformations.  For example, perhaps adding 
`[0.5, 0.3, 0.6, 0, 0, 0, 0, 0....]` to the vector for `man` ends up being the vector for `woman`, and adding it
to `king` gets you `queen`.  This is simplifying a bit, the `male->female` vector is not as clean as my example,
but it's still a very neat result.  Here's a graphic from google showing some linear relationships:

![Wordvec linear relationships](./wordvec-linear-relationships.png)

I've explored this feature some.  I've found it to be impressive but a bit messy and not as clean as the diagrams.
I haven't found any practical use for it. (Analogy completer?)

# Starting point: A simple app without any word vectors

Let's start with a simple react app that loads a dataset in memory and lets you type to search it.  
I made a quick one that searches a list of all S&P 500 companies and their descriptions.

[Here is the app](/vector-apps/part1/).
[Here is the source code](https://github.com/mreishus/vector-search-example/tree/02_lunr_search/front-end).

I made it quickly using `create-react-app`.  The CSS classes are from [tachyons](http://tachyons.io/) - they will
look weird if you've never seen them before.  It uses [lunrjs](https://lunrjs.com/) to search.

# Up Next

Next, we will start building a related words service using the [GoogleNews-vectors-negative300.bin.gz](https://code.google.com/archive/p/word2vec/) model and make the app use it.
