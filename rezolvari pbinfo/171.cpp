#include <iostream>

using namespace std;
int n, i, x, k, cif, cmin, nrmax;
int main() {
    cin >> n;
    cin >> x;
    k = x;
    while (k / 10) {
        k = k / 10;
    }
    cmin = k;
    nrmax = x;
    for (i = 2; i <= n; i++) {
        cin >> x;
        k = x;
        while (k / 10) {
            k = k / 10;
        }
        if (k < cmin) cmin = k, nrmax = x;
        else if (k == cmin)
            if (x > nrmax) nrmax = x;
    }
    cout << nrmax;
    return 0;
}