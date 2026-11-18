#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int n, k, x;
    cin >> n >> k;

    int C = 0;
    long long S = 0;
    int rez = -1;

    for (int i = 1; i <= n; i++) {
        cin >> x;

        int r = sqrt(x);

        if (r * r == x) {
            S += x;
            C++;

            if (C == k) {
                rez = x;
            }
        }
    }

    cout << S << '\n';

    if (rez != -1)
        cout << rez;
    else
        cout << "nu exista";

    return 0;
}
