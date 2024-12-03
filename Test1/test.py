def print_leftover_cookie_dough(n):
    for i in range(n):
        dist = abs(n // 2 - i)
        
        row = ['*'] * n
        for j in range(dist, n - dist):
            row[j] = ' '
        print(''.join(row))


n = int(input())
if n % 2 == 1:
    print_leftover_cookie_dough(n)
else:
    print("no cookie :(")
