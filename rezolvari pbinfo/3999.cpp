#include <iostream>
using namespace std;

int main()
{
    unsigned long long n, a, b, s = 0;
    cin >> n;
    while (n--)
    {
        cin >> a >> b;
        if (a < b)
            s += a;
        else
            s += b;
    }
    cout << s;
    return 0;
}