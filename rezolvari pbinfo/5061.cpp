#include <iostream>
using namespace std;

int main() {
    int x, C = 0, P = 1;

    cin >> x;

    while (x != 0) {
        if (x % 2 == 0)
            C++;

        if (x < 10)
            P *= x;

        cin >> x;
    }

    cout << C << " " << P;

    return 0;
}
