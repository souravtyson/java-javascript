/*
    You are tasked with handling a list of products for an e-commerce website. Each product has the following properties:

        id: Unique identifier for the product (number).
        name: Name of the product (string).
        price: Price of the product (number).
        category: Category of the product (string).
        discount: Discount percentage applied to the product (optional, number between 0 and 100).
        You need to implement a function getFilteredProducts that takes the following parameters:
        
        products: Array of product objects.
        minPrice: The minimum price to filter the products (number).
        maxPrice: The maximum price to filter the products (number).
        categoryFilter: An optional category filter (string). If provided, return products only from that category.
        sortBy: Sorting criteria ('price' or 'name'). Products should be sorted in ascending order based on the criteria.
        The function should return an array of products that:
        
        Fall between the minPrice and maxPrice.
        Match the categoryFilter (if provided).
        Are sorted by the sortBy parameter.
        Note: The function should also apply the discount (if any) to the price before doing any filtering or sorting.
        
        Function signature:
        function getFilteredProducts(products, minPrice, maxPrice, categoryFilter, sortBy) {
        // Your code here
        }
        Example Input:
        const products = [
        { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', discount: 10 },
        { id: 2, name: 'Shoes', price: 200, category: 'Fashion', discount: 0 },
        { id: 3, name: 'Smartphone', price: 800, category: 'Electronics', discount: 5 },
        { id: 4, name: 'T-shirt', price: 50, category: 'Fashion' },
        { id: 5, name: 'Fridge', price: 1200, category: 'Appliances', discount: 20 },
        ];
        Example Output:
        getFilteredProducts(products, 100, 1000, 'Electronics', 'price');
        [
        { id: 3, name: 'Smartphone', price: 760, category: 'Electronics' }, // 5% discount applied
        { id: 1, name: 'Laptop', price: 900, category: 'Electronics' },      // 10% discount applied
        ]

*/


// Function to filter products with discount calculation
function getFilteredProducts2(products, minPrice, maxPrice, category, sortBy) {
    // console.log(JSON.stringify(products))
    
    if (!products.length) {
      return products;
    }
    let prodCopy = JSON.parse(JSON.stringify(products))
    if (category) {
      prodCopy = prodCopy.filter((prod) => prod.category === category);
    }
  
    let filterProductByPrice = [];
    filterProductByPrice = prodCopy
      .filter((prod) => {
        if (prod.discount) {
          const finalPrice = prod.price - prod.discount;
          prod.price = finalPrice;
        }
        return prod.price > minPrice && prod.price < maxPrice;
      })
      .map((prod) => {
        if (prod.discount) {
          delete prod.discount;
        }
        return prod;
      });
      let x = []
    if (sortBy && sortBy === "price") {
      x = filterProductByPrice.sort((p1, p2) =>
        p1.price < p2.price ? -1 : p1.price > p2.price ? 1 : 0
      );
    } else if (sortBy && sortBy === "name") {
      x = filterProductByPrice.sort((p1, p2) =>
        p1.name < p2.name ? 1 : p1.name > p2.name ? -1 : 0
      );
    } else {
      x = filterProductByPrice;
    }
    // console.log(x)
    return x;
}

// better approach 

function getFilteredProducts(products, minPrice, maxPrice, category, sortBy) {
  if (!Array.isArray(products) || products.length === 0) {
    return [];
  }

  return products
    // Filter by category if provided
    .filter((prod) => (category ? prod.category === category : true))
    // Apply discount and filter by price range
    .map((prod) => {
      const discountedProduct = { ...prod }; // Create a shallow copy to avoid mutating the original
      if (discountedProduct.discount) {
        discountedProduct.price = parseFloat((discountedProduct.price - discountedProduct.discount).toFixed(2));
        delete discountedProduct.discount; // Remove discount after applying
      }
      return discountedProduct;
    })
    .filter((prod) => prod.price > minPrice && prod.price < maxPrice)
    // Sort based on sortBy parameter
    .sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price; // Ascending order
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name); // Alphabetical order
      }
      return 0; // No sorting
    });
}
  
  // Test runner to check if actual output matches expected output
  function runTest(testName, actualOutput, expectedOutput) {
    const passed =
      JSON.stringify(actualOutput) === JSON.stringify(expectedOutput);
  
    console.log(`${testName}: ${passed ? "PASSED" : "FAILED"}`);
  }
  
  // Sample product data
  const products = [
    { id: 1, name: "Laptop", price: 900, category: "Electronics", discount: 10 },
    { id: 2, name: "Shoes", price: 200, category: "Fashion" },
    {
      id: 3,
      name: "Smartphone",
      price: 760,
      category: "Electronics",
      discount: 5,
    },
    { id: 4, name: "T-shirt", price: 50, category: "Fashion" },
    { id: 5, name: "Fridge", price: 960, category: "Appliances" },
  ];
  
  // Additional test products
  const testProducts1 = [
    { id: 6, name: "Table", price: 100, category: "Furniture", discount: 100 },
  ];
  const testProducts2 = [
    { id: 7, name: "Chair", price: 150, category: "Furniture" },
  ];
  
  // Test cases
  runTest("Test Case 1", getFilteredProducts(products, 100, 500, null, "price"), [
    { id: 2, name: "Shoes", price: 200, category: "Fashion" },
  ]);
  
  runTest(
    "Test Case 2",
    getFilteredProducts(products, 100, 1000, "Electronics", "price"),
    [
      { id: 3, name: "Smartphone", price: 755, category: "Electronics" },
      { id: 1, name: "Laptop", price: 890, category: "Electronics" },
    ]
  );
  
  runTest(
    "Test Case 3",
    getFilteredProducts(products, 100, 1000, "Fashion", "name"),
    [{ id: 2, name: "Shoes", price: 200, category: "Fashion" }]
  );
  
  runTest(
    "Test Case 4",
    getFilteredProducts(products, 100, 500, "Fashion", "price"),
    [{ id: 2, name: "Shoes", price: 200, category: "Fashion" }]
  );
  
  runTest(
    "Test Case 5",
    getFilteredProducts(products, 500, 2000, null, "price"),
    [
      { id: 3, name: "Smartphone", price: 755, category: "Electronics" },
      { id: 1, name: "Laptop", price: 890, category: "Electronics" },
      { id: 5, name: "Fridge", price: 960, category: "Appliances" },
    ]
  );
  
  runTest(
    "Test Case 6",
    getFilteredProducts(products, 2000, 5000, null, "price"),
    []
  );
  
  runTest(
    "Test Case 7",
    getFilteredProducts(products, 100, 1000, "Books", "price"),
    []
  );
  
  runTest("Test Case 8", getFilteredProducts(products, 0, 2000, null, "price"), [
    { id: 4, name: "T-shirt", price: 50, category: "Fashion" },
    { id: 2, name: "Shoes", price: 200, category: "Fashion" },
    { id: 3, name: "Smartphone", price: 755, category: "Electronics" },
    { id: 1, name: "Laptop", price: 890, category: "Electronics" },
    { id: 5, name: "Fridge", price: 960, category: "Appliances" },
  ]);
  
  runTest(
    "Test Case 9",
    getFilteredProducts(testProducts1, 50, 200, "Furniture", "price"),
    []
  );
  
  runTest(
    "Test Case 10",
    getFilteredProducts(testProducts2, 50, 200, "Furniture", "price"),
    [{ id: 7, name: "Chair", price: 150, category: "Furniture" }]
  );
  