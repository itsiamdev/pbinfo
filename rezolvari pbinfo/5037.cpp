#include <iostream>
using namespace std;

int main() {
    int n, x;
    cin >> n;

    bool gasit = false;

    for (int i = 0; i < n; i++) {
        cin >> x;

        if (x % 2 == 0) {
            cout << x;
            gasit = true;
            break;
        }
    }

    if (!gasit)
        cout << "IMPOSIBIL";

    return 0;
}