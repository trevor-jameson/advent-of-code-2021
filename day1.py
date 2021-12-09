input = open('./day1_input.txt', 'r').read()

test_data = [0, 1, 4, 3, 2, 10] # 3

def depth_finder(input):
    depths = input.splitlines()
    sink_count = 0
    for i, d in enumerate(depths):
        if i != 0 and int(depths[i - 1]) < int(d): 
            sink_count += 1
    return sink_count
    

depth_finder(input)

