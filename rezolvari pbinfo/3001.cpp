#include <cmath>
#include <iostream>

using namespace std;

int main(void)
{
    int n, s = 0;
    long long a, r, c;

    cin >> n;

    while(n--) {
        cin >> a >> r;
        c = a * a + 3 * a + 1;
        if(c == r)
            s++;
    }

    cout << s;

    return 0;
}