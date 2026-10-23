#include <iostream>
using namespace std;
int main()
{
    int n, c1, c2, c3, t;
    cin >> t;
    if (t == 1)
    {
        cin >> n >> c1 >> c2;
        cout << n-(n / c1 + n / c2 - n / (c1 * c2));
    }
    else
    {
        cin >> n >> c1 >> c2 >> c3;
        cout <<n - (n / c1 + n / c2 + n / c3 - n / (c1 * c2) - n / (c2 * c3) - n / (c1 * c3) + n / (c1 * c2 * c3));
    }
    return 0;
}