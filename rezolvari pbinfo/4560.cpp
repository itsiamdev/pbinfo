#include <bits/stdc++.h>

using namespace std;

int n, s = 0;

int main()
{
    cin >> n;
    while (n)
    {
        if (n % 10 == n /100 && n > 99 && n < 1000)
        {
            s += n;
        }
        cin >> n;
    }
    cout << s;
    return 0;
}