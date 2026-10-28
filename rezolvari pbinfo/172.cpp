#include <iostream>
#include <math.h>
using namespace std;

int main() {
    int n, i, j, a, b;
    cin >> n;
    cin >> i >> j;
    a = i;
    b = i = j;
    n -= 2;
    do {
        cin >> j;
        if((abs(i - j) < abs(a - b)) || (abs(i - j) == abs(a - b) && i + j < a + b)) {
            a = i, b = j;
        }
        i = j;
    } while(--n);
    cout << a << " " << b;
}