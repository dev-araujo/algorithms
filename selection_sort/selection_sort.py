def find_smaller(arr):
    smaller = arr[0]
    smaller_index = 0

    for index in range(1, len(arr)):
        if arr[index] < smaller:
            smaller = arr[index]
            smaller_index = index
    return smaller_index


def selection_sort(arr):
    new_arr = []
    for index in range(len(arr)):
        smaller_position = find_smaller(arr)
        new_arr.append(arr.pop(smaller_position))
    return new_arr


testing_arr = [5, 3, 6, 2, 10]
print(selection_sort(testing_arr))  # Saída esperada: [2, 3, 5, 6, 10]
