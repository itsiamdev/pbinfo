#include <iostream>
using namespace std;

int n, i, x, y, xfin, yfin;

int main()
{
    cin >> n;
    for (i = 1; i <= n; i++)
    {
        cin >> x >> y;
        if (abs(x - y) > abs(xfin - yfin)) xfin = x, yfin = y;
    }
    cout << xfin << " " << yfin;
}