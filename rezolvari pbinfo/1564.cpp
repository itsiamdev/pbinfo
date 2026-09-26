#include <bits/stdc++.h>

using namespace std;
ifstream fin ("a1.in");
ofstream fout ("b1.out");
int v[1000005];
int main ()
{
    int n;
    cin >>n;
    for (int i=1;i<=n;i++)
    {
        for (int j=1;j<=i;j++)
        {
            cout << "*";
        }
        cout << "\n";
    }
    for (int i=0;i<n;i++)
    {
        for (int j=1;j<=n+i;j++)
        {
            cout << " ";
        }
        for (int k=1;k<=n-i;k++)
        {
            cout << "*";
        }
        cout << "\n";
    }
   }