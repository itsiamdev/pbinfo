#include <iostream>

using namespace std;

int main() {
    int n;
    if (!(cin >> n)) return 0;

    long long sum = 0;
    for (int i = 0; i < n; ++i) {
        long long x;
        cin >> x;
        sum += x;
    }

    cout << sum << "\n";

    return 0;
}