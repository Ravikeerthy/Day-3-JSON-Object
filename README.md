# Day-3-JSON-Object

 **How to compare two JSON have same properties without order?**

 The code compares two objects by:

1. Converting each object to an array of [key, value] pairs.
2. Sorting these arrays to ensure order doesn't matter.
3. Converting the sorted arrays to JSON strings using Stringify method
4. Comparing these JSON strings for equality.

**Using Rest countries API display all the country flags**

**Using the rest countries API print all the names, regions, sub-region and population**

The code makes an asynchronous HTTP GET request to the Rest Countries API to fetch data about all countries. Once the data is received, it parses the JSON response and logs the flags, name, population, region, and sub-region of each country to the console.


