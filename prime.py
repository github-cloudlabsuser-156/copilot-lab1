import math

def prime(n):
    if n < 2:
        return False
    for x in range(2, math.isqrt(n) + 1):
        if n % x == 0:
            return False
    return True


