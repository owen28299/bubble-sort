##Bubble Sort

Bubble sort works by iterating through each element of the array, and for each element, compares its value to the next element. If the next element is smaller, then the current and the next element is swapped. Bubble sort will continuously run iterations until no swaps are done in a pass.

pseudo-code:
1. Create a function that will run one "pass" through the array
2. In each pass, loop through the array
3. At each element, compare each element to the next element
4. If the current element is larger, swap them. Track the number of swaps that have taken place.
5. Create the main function that will recursively call the "pass" function.
6. Create a flag called isDone that defaults to false.
7. Create a while loop that checks whether isDone is false.
8. Pass the jumbled array into the while loop, and then into the "pass" function.
9. Track the number of swaps, if zero, set isDone to true.
10. Return sorted array

time complexity:
O(N^2)
An array of 5 numbers, for instance, will need to loop through 5 numbers, 5 times.

space complexity:
O(1)
There are no call stacks used in this function so the memory usage is constant.


##Quick Sort

Quick sort is much more efficient. It uses pivots and partitions to separate numbers efficiently, so that on average, it halves the number of numbers to sort through each time. It uses recursion to loop through partiions until they are sorted.

psuedo-code:

1. The function should take the jumbled array as an argument.
2. Set the base case such that if the array length if less than or equal to 1, return the array.
3. Declare variables left, pivot and right and set them to empty arrays.
4. Push array[0] into the pivot and then shift() array 0.
5. Run a loop through the array that pushes the number to the "left" array, if it is less than the pivot, and to the "right" array it it is greater than OR EQUAL to the pivot.
6. Now the left, right and pivot needs to be checked. If BOTH left and right are not of length 1 or 0, then we need to iterate through left and right again.
7. Set the if statement such that if the above is not satisfied, left = quicksort(left) and right = quicksort(right)
8. If the condition is satisfied, we can simply return the concatenated result: left.concat(pivot,right)

complexity:
O (n log n)
It is linearly more complex, with a factor of log n, as it takes a large number of extra units in the jumbled array to increases the complexity. This is because the complexity is halved in each recusive loop.

space complexity:
O (n)
At worst case, where each n increases the number of calls stacks by n, space complexity increases porportionally with n.


##merge sort:

Merge sort is another recursive sorting algorithm that works by splitting the array into single arrays, and then combines them recusively through iterative comparison.

pseudo-code:
1. Declare a function called mergesort that takes the array as an argument.
2. Set the base case, such that if the array is of length 0 or 1, it is already sorted. If this is the case, simply return the array.
3. Declare variables left and right as an empty array
4. Loop through the jumbled array and put half in left and half in right. Do this using i % 2, so that even and odd indices of the array go into separate arrays.
5. We need to keep doing this until each array is only of 1 length, so set left equal to mergesort(left) and right equal to mergesort(right)
6. We now need to declare a new function called merge that will iteratively sort each array. Merge will take 2 arguments, left and right.
7. Declare "result" as a new empty array
8. The way the recusion works is that the merge function will first apply to the smallest arrays at the end, before applying to the larger arrays post merge.
9. So, first of all, while left and right are both not empty, we need to loop through left and right and continuously compare the 1st element of left with the first element of right.
10. If left[0] is greater than right[0], add left[0] to the result array and vice versa.
11. We will then need to .shift() the array from which the element was selected so that we eventually shrink both arrays to 0 and pass their elements, in order, to the result array.
12. We then need to account for the possibility that either the left or right arrays are empty, i.e. if there are an odd number of elements.
13. So create a while loop that, if the right if empty, push each of the elements of the left array into result. And vice versa.
14. Return the result array.
15. In the main, mergesort array, the final result should now be merge(left,right);

time complexity:
O (n log n)
The complexity is similar to that of quick sort, as it continuously halves the number of numbers to work with.

space complexity:
O (n)
Will require a new callback for each extra unit in the array, n.


##selectionsort

Selection sort works by iteratively picking out the lowest number in a jumbled array and selectively places that number into a new empty array, in order.

pseudo-code:
1. Declare a function, selectionsort, that takes an array as argument
2. Declare a variable end and set it to the length of the original array.
3. Declare a variable sorted_array and set it equal to an empty array.
4. Declare another function called findLowest, that takes an array as argument, and will return the index of the lowest value in the array.
5. Set lowest to equal to Infinity
6. Declare a variable to index and set it to 0;
7. Iterate through the array and, if array[i] is less than OR EQUAL to "lowest", set "lowest" equal to array[i] and "index" = i
8. Return index
9. Now create a for loop that will loop "end" times. This needs to be fixed to prevent the for loop ending early.
10. Find the index of the smallest number in the array by passing it into findLowest.
11. Add this number to sorted_array.
12. Remove this number from the original array using .splice(index, 1).
13. Once completed, return sorted_array.

time complexity:
O (n^2)
This is very time complex because selection sort needs to loop through an array of length n, n x n number of times. It needs to do a full loop, and also another loop to find the lowest number after each loop.

space complexity:
O(n)
No additional call stacks, but will need to loop through an extra element for each element that is added.


##insertion sort

Insertion sort works by "picking up" each element of the array and iterating through all of the elements "behind" it. It will then "insert" the number that has been picked up into the correct point.

pseudo-code:
1.Declare a function called insertionSort that takes an array as an argument
2. Declare an empty variable called temp.
3. We now need to create a for loop within a for loop. The first for loop iterates through the whole array and sets temp to arr[i] of at each point of the array.
4. The second for loop looks back through the elements that have already been looped through.
5. We need to start for loop 1 at index 1 because the first element has nothing before it.
6. The second for loop starts 1 index BEHIND for loop 1, so it should be for (var j = i - 1 ...) where i is the current index of the first for loop.
7. The second for loop will loop BACK into index 0;
8. At each index of the 2nd for loop, we need to compare temp to the number. If temp is smaller than that number, swap the 2 numbers.
9. We do that by first deleting that number using splice(j + 1, 1) and then inserting that number using splice(j, 0, temp);
10. We need to use j + 1 and j, because arr[j + 1] is always equal to temp and arr[j] is always the comparison number, looking backwards.
11. Return the now sorted array.

time-complexity:
O(n^2)

Insertion sort is of n^2 complexity because for each element in the array, it will need to do 2 loops, one for each element in the array, and then once, looping backwards.

space-complexity:
O(n)

Is linear with n, as no additional instance variables are stored in the call stack. Each additional element will create one extra variable to store.