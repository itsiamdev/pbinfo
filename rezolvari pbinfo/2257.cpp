#include <iostream>

using namespace std;

int main(void)
{
    int n, start = 1, end = 1, i = 1;
    float m, x;

    cin >> n;
    cin >> m;

    n--;

    while(n--) {
        cin >> x;
        if(x > m) {
            start = i + 1;
            end = i + 1;
            m = x;
        } else if(x == m)
            end = i + 1;
        i++;
    }

    cout << start << " " << end;

    return 0;
}