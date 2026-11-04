#include <iostream>
using namespace std;

int main() {
    int k, s = 0;
    char x[35];

    cin >> k;
    cin >> x;

    for (int i = 0; i < k; i++)
        s += x[i] - '0';

    int c = s / k;
    int r = s % k;

    for (int i = 1; i <= k - r; i++)
        cout << c;

    for (int i = 1; i <= r; i++)
        cout << c + 1;

    return 0;
}