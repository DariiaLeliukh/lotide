# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rilel/lotide`

**Require it:**

`const _ = require('@rilel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)` : returns the first element of the array
* `tail(array)` : returns every element except the head (first element) of the array
* `middle(array)` : description
* `assertArraysEqual(array1, array2)` : prints out if arrays are the same or not
* `assertEqual(actual, expected)` : prints out if values match and returns true/false if the match/don't match
* `assertObjectsEqual(actual, expected)` : prints out if objects are the same or not
* `countLetters(input)` : returns an object with keys (letters resent in the input) and according values (how many times this letter showed up in the input)
* `countOnly(allItems, itemsToCount)` : returns an object with keys (items that were set to true to be counted in itemsToCount) and values (how many times the value was found in the initial allItems array)
* `eqArrays(array1, array2)` : prints out true or false if arrays are the same
* `eqObjects(object1, object2)` : returns true if both objects have identical keys with identical values.
* `findKey(object, callback)` : returns key for an object based on the match to the input value callback
* `findKeyByValue()` : returns key for an object based on the match to the input value 
* `flatten(array)` : transforms two-dimentional array into 1-dimentional array
* `letterPositions(sentence)` : returns array with letter positions from a given input
* `map(array, callback)` : returns an array of values based on the callback fundtion applied to the input array
* `takeUntil(array, callback)` : returns an array that is a slice if a given array up until the given callback
* `without(source, itemsToRemove)` : returns an array without elements that were set to be removed