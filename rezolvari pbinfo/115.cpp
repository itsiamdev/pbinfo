#include <iostream>
using namespace std;

int main() {
    int n, k = 0, nr, s = 0;
    cin >> n;
    while(n--) {
        cin >> nr;
        if(nr % 2 == 0)
            k += 1, s += nr;
    }
    double M = (double) s / k;
    cout << M;
}