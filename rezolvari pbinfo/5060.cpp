
#include <iostream>
using namespace std;

int main() {
    int x;
    int S = 0, P = 1;

    cin >> x;

    while (x != 0) {
        if (x % 2 == 0)
            S += x;

        if (x < 10)
            P *= x;

        cin >> x;
    }

    cout << S << " " << P;

    return 0;
}
