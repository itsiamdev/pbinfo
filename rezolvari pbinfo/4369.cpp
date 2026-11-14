#include <bits/stdc++.h>
using namespace std;
int n, v[100001];
long long s = 0, mini = INT_MAX;
int main()
{
    cin >> n;
    for(int i = 1; i <= n; ++i)
    {
        cin >> v[i];
        if(v[i] < mini)
        {
            mini = v[i];
        }
    }
    for(int i = 1; i <= n; ++i)
    {
       s = s + v[i];
    }
    cout << s - n * mini;
    return 0;
}