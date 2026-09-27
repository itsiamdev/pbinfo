#include <iostream>
using namespace std;

int main()
{
   short int n, m;
   cin >> n >> m;
   short int i, o;
   cout << '{';
   for (i=1; i<=n; i++)
      for (o=1; o<=m; o++)
      {
         cout<<'('<<i<<','<<o<<')';
         if (o+1<=m || i+1<=n)
            cout<<',';
      }
   cout<<'}';
   return 0;
}