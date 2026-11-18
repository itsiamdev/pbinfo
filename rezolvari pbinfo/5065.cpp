#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int n, k, x;
    cin >> n >> k;

    int cnt = 0;
    long long s = 0;

    for (int i = 1; i <= n; i++) {
        cin >> x;

        int r = sqrt(x);

        if (r * r == x) {
            cnt++;

            if (cnt <= k) {
                s += x;
            }
        }
    }

    cout << cnt << '\n';

    if (cnt >= k)
        cout << s;
    else
        cout << "imposibil";

    return 0;
}
