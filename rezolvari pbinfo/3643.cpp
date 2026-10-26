#include <iostream>

using namespace std;

int main(void)
{
    long long c, v, s = 0, g, i;

    cin >> c >> v;

    if (c == 1) {
        for(g = 1;; g++) {
            s += (g + (g + 1) / 2);

            if (s >= v)
                break;
        }

        s -= (g + (g + 1) / 2);
        v -= s;

        if(v <= g) {
            cout << v << endl;

        } else {
            v -= g;
            cout << 2 * v - 1 << endl;

        }
    } else {
        for(i = 1; i <= v - 1; i++) {
            s += (i + (i + 1) / 2);
        }
        cout << s + v << endl;
    }

    return 0;
}