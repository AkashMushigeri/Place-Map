export const DSA_TOPICS = [
  "Arrays",
  "Strings",
  "Hashing",
  "Linked Lists",
  "Stacks",
  "Queues",
  "Trees",
  "Graphs",
  "Recursion",
  "Dynamic Programming",
  "Greedy",
  "Binary Search",
  "Sorting",
  "Two Pointers",
  "Sliding Window"
];

export const DSA_PROBLEMS = [
  // Arrays
  { id: "p1", title: "Two Sum", topic: "Arrays", difficulty: "Easy", companies: ["Google", "Amazon", "Meta"], pattern: "Hash Map lookup in single pass" },
  { id: "p2", title: "Best Time to Buy and Sell Stock", topic: "Arrays", difficulty: "Easy", companies: ["Amazon", "Microsoft"], pattern: "One pass tracking minimum buy price" },
  { id: "p3", title: "Product of Array Except Self", topic: "Arrays", difficulty: "Medium", companies: ["Amazon", "Apple", "Google"], pattern: "Prefix & Suffix product passes" },
  { id: "p4", title: "Maximum Subarray (Kadane's)", topic: "Arrays", difficulty: "Medium", companies: ["Google", "Microsoft"], pattern: "Dynamic Programming / Greedy Kadane's" },
  
  // Strings
  { id: "p5", title: "Valid Anagram", topic: "Strings", difficulty: "Easy", companies: ["Amazon", "Google"], pattern: "Character frequency counting" },
  { id: "p6", title: "Longest Palindromic Substring", topic: "Strings", difficulty: "Medium", companies: ["Amazon", "Meta", "Google"], pattern: "Expand around center" },
  { id: "p7", title: "Valid Parentheses", topic: "Strings", difficulty: "Easy", companies: ["Meta", "Amazon", "Microsoft"], pattern: "Stack tracking opening brackets" },
  
  // Hashing
  { id: "p8", title: "Group Anagrams", topic: "Hashing", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], pattern: "Sorted string as hash key" },
  { id: "p9", title: "Top K Frequent Elements", topic: "Hashing", difficulty: "Medium", companies: ["Meta", "Amazon"], pattern: "Bucket Sort / Min-Heap" },
  { id: "p10", title: "Longest Consecutive Sequence", topic: "Hashing", difficulty: "Medium", companies: ["Google", "Amazon"], pattern: "Hash set lookup for sequence start" },

  // Linked Lists
  { id: "p11", title: "Reverse a Linked List", topic: "Linked Lists", difficulty: "Easy", companies: ["Google", "Microsoft", "Amazon"], pattern: "Iterative 3 pointers (prev, curr, next)" },
  { id: "p12", title: "Merge Two Sorted Lists", topic: "Linked Lists", difficulty: "Easy", companies: ["Microsoft", "Amazon"], pattern: "Dummy head two-pointer merge" },
  { id: "p13", title: "Linked List Cycle (Floyd's)", topic: "Linked Lists", difficulty: "Easy", companies: ["Amazon", "Microsoft"], pattern: "Fast & Slow pointer tortoise and hare" },
  { id: "p14", title: "Remove Nth Node From End of List", topic: "Linked Lists", difficulty: "Medium", companies: ["Google", "Meta"], pattern: "Two pointers with N offset" },

  // Stacks
  { id: "p15", title: "Min Stack", topic: "Stacks", difficulty: "Medium", companies: ["Amazon", "Google"], pattern: "Auxiliary stack tracking minimums" },
  { id: "p16", title: "Daily Temperatures", topic: "Stacks", difficulty: "Medium", companies: ["Meta", "Google"], pattern: "Monotonic decreasing stack" },
  { id: "p17", title: "Evaluate Reverse Polish Notation", topic: "Stacks", difficulty: "Medium", companies: ["Amazon", "Microsoft"], pattern: "Stack operand reduction" },

  // Queues
  { id: "p18", title: "Implement Queue using Stacks", topic: "Queues", difficulty: "Easy", companies: ["Amazon", "Microsoft"], pattern: "Two stacks in/out buffering" },
  { id: "p19", title: "Design Circular Queue", topic: "Queues", difficulty: "Medium", companies: ["Google", "Meta"], pattern: "Array with modulo arithmetic" },

  // Trees
  { id: "p20", title: "Maximum Depth of Binary Tree", topic: "Trees", difficulty: "Easy", companies: ["Google", "Amazon"], pattern: "DFS post-order traversal" },
  { id: "p21", title: "Invert / Flip Binary Tree", topic: "Trees", difficulty: "Easy", companies: ["Google", "Microsoft"], pattern: "Recursive subtree swapping" },
  { id: "p22", title: "Validate Binary Search Tree", topic: "Trees", difficulty: "Medium", companies: ["Amazon", "Meta", "Google"], pattern: "DFS with (min, max) bounds" },
  { id: "p23", title: "Lowest Common Ancestor of a BST", topic: "Trees", difficulty: "Medium", companies: ["Amazon", "Meta"], pattern: "BST value splitting logic" },
  { id: "p24", title: "Binary Tree Level Order Traversal", topic: "Trees", difficulty: "Medium", companies: ["Amazon", "Microsoft"], pattern: "BFS with queue level sizing" },

  // Graphs
  { id: "p25", title: "Number of Islands", topic: "Graphs", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], pattern: "DFS/BFS flood fill" },
  { id: "p26", title: "Clone Graph", topic: "Graphs", difficulty: "Medium", companies: ["Meta", "Google"], pattern: "DFS with visited HashMap" },
  { id: "p27", title: "Course Schedule (Cycle Detection)", topic: "Graphs", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], pattern: "Topological Sort (Kahn's / DFS)" },

  // Recursion
  { id: "p28", title: "Subsets", topic: "Recursion", difficulty: "Medium", companies: ["Meta", "Amazon"], pattern: "Backtracking include/exclude pattern" },
  { id: "p29", title: "Combination Sum", topic: "Recursion", difficulty: "Medium", companies: ["Amazon", "Google"], pattern: "Backtracking with reuse decision" },

  // Dynamic Programming
  { id: "p30", title: "Climbing Stairs", topic: "Dynamic Programming", difficulty: "Easy", companies: ["Amazon", "Google"], pattern: "Fibonacci 1D DP tabulation" },
  { id: "p31", title: "Coin Change", topic: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], pattern: "Unbounded Knapsack bottom-up DP" },
  { id: "p32", title: "Longest Increasing Subsequence", topic: "Dynamic Programming", difficulty: "Medium", companies: ["Google", "Meta"], pattern: "1D DP or Patience Binary Search" },
  { id: "p33", title: "Word Break", topic: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Meta", "Google"], pattern: "Prefix matching with boolean DP array" },

  // Greedy
  { id: "p34", title: "Jump Game", topic: "Greedy", difficulty: "Medium", companies: ["Amazon", "Google"], pattern: "Track furthest reachable index" },
  { id: "p35", title: "Gas Station", topic: "Greedy", difficulty: "Medium", companies: ["Google", "Amazon"], pattern: "Total gas check + reset on deficit" },

  // Binary Search
  { id: "p36", title: "Binary Search", topic: "Binary Search", difficulty: "Easy", companies: ["Google", "Microsoft"], pattern: "Left, right pointers with middle split" },
  { id: "p37", title: "Search in Rotated Sorted Array", topic: "Binary Search", difficulty: "Medium", companies: ["Amazon", "Meta", "Google"], pattern: "Identify sorted half and recurse" },
  { id: "p38", title: "Find Minimum in Rotated Sorted Array", topic: "Binary Search", difficulty: "Medium", companies: ["Microsoft", "Google"], pattern: "Compare mid to right boundary" },

  // Sorting
  { id: "p39", title: "Merge Intervals", topic: "Sorting", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], pattern: "Sort by start time and merge overlaps" },
  { id: "p40", title: "Non-overlapping Intervals", topic: "Sorting", difficulty: "Medium", companies: ["Google", "Amazon"], pattern: "Sort by end time (Interval Scheduling)" },

  // Two Pointers
  { id: "p41", title: "Valid Palindrome", topic: "Two Pointers", difficulty: "Easy", companies: ["Meta", "Amazon"], pattern: "Inward moving left & right pointers" },
  { id: "p42", title: "Container With Most Water", topic: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Google"], pattern: "Two pointers, move shorter boundary" },
  { id: "p43", title: "3Sum", topic: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Meta", "Google"], pattern: "Sort + fix one element + Two Sum II" },

  // Sliding Window
  { id: "p44", title: "Best Time to Buy & Sell Stock", topic: "Sliding Window", difficulty: "Easy", companies: ["Amazon", "Google"], pattern: "Left buy, right sell window" },
  { id: "p45", title: "Longest Substring Without Repeating Characters", topic: "Sliding Window", difficulty: "Medium", companies: ["Amazon", "Meta", "Google"], pattern: "Dynamic window with set/map lookup" },
  { id: "p46", title: "Minimum Window Substring", topic: "Sliding Window", difficulty: "Hard", companies: ["Meta", "Google", "Amazon"], pattern: "Two-pointer expandable/contractible window" }
];
