input = open('./day1_input.txt', 'r').read()

test_data = [0, 1, 4, 3, 2, 10] # 3

def depth_finder(input):
    depths = input.splitlines()
    sink_count = 0
    for i, d in enumerate(depths):
        if i != 0 and int(depths[i - 1]) < int(d): 
            sink_count += 1
    print('depth_finder results: ', sink_count)
    

depth_finder(input)

def depth_finder_2_the_deepening(input):
    depths = input.splitlines()
    dep_len = len(depths)
    sink_count = 0
    for i in range(0, dep_len):
        if (i < dep_len - 3):
            seg1 = int(depths[i]) + int(depths[i + 1]) + int(depths[i + 2])
            seg2 = int(depths[i + 1]) + int(depths[i + 2]) + int(depths[i + 3])
            if (seg1 < seg2):
                sink_count += 1
        
    print('depth_finder_2_the_deepening results', sink_count)

depth_finder_2_the_deepening(input)